import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import UserContext from "../../../context/UserContext";

const { width, height } = Dimensions.get("window");

const BodyTypeCarousel = () => {
  const [sex, setSex] = useState(); 
  const [age, setAge] = useState();
  const [idd, setIdd] = useState();
  const [weight, setWeight] = useState();
  const User = useContext(UserContext);

  useEffect(() => {
    const fetchUserName = async () => {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const db = getDatabase();
      const userRef = ref(db, 'users/' + userId);

      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSex(data.gender === 'f' ? 2 : 1);
          setAge(data.age);
          setWeight(data.weight);
        } else {
          console.log("No data available");
        }
      });
    };
  fetchUserName();
}, []);

  const navigation = useNavigation();
  const mass = calculateMuscleMass(age, sex);

  const bodyTypes =
    sex === 1
      ? [
          {
            id: "1",
            image: require("../../../assets/Slim.png"),
            weight: "70 - 75",
            mass: Math.floor(70 * mass),
            margin: 0.1 * width,
          },
          {
            id: "2",
            image: require("../../../assets/SlimShredded.png"),
            weight: "80 - 85",
            mass: Math.floor(80 * mass),
            margin: -0.1 * width,
          },
          {
            id: "3",
            image: require("../../../assets/beachBody.png"),
            weight: "90 - 95",
            mass: Math.floor(90 * mass),
            margin: 0.1 * width,
          },
          {
            id: "4",
            image: require("../../../assets/Hero.png"),
            weight: "100 - 105",
            mass: Math.floor(100 * mass),
            margin: -0.1 * width,
          },
          {
            id: "5",
            image: require("../../../assets/BodyBuilder.png"),
            weight: "110 нэмэх",
            mass: Math.floor(110 * mass),
            margin: 0.1 * width,
          },
        ]
      : [
          {
            id: "1",
            image: require("../../../assets/5.png"),
            weight: "45 - 50",
            mass: Math.floor(45 * mass),
            margin: 0.05 * width,
          },
          {
            id: "2",
            image: require("../../../assets/6.png"),
            weight: "50 - 55",
            mass: Math.floor(50 * mass),
            margin: -0.05 * width,
          },
          {
            id: "3",
            image: require("../../../assets/8.png"),
            weight: "55 - 60",
            mass: Math.floor(55 * mass),
            margin: 0.1 * width,
          },
          {
            id: "4",
            image: require("../../../assets/9.png"),
            weight: "65 - 70",
            mass: Math.floor(60 * mass),
            margin: -0.05 * width,
          },
          {
            id: "5",
            image: require("../../../assets/10.png"),
            weight: "70 - 75",
            mass: Math.floor(65 * mass),
            margin: 0.15 * width,
          },
        ];

  const handlePress = async (id, sex) => {
    const idd = calcID(weight, id, sex); 
    console.log("Selected IDD:", idd);
    User.setPlanId(idd);
    User.checkPlan(true);
    
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      try {
        const database = getDatabase();
        const userRef = ref(database, 'users/' + user.uid);
        
        await update(userRef, {
          planId: idd,
          plan: true
        });
  
        console.log("Plan ID saved successfully!");
      } catch (error) {
        console.error("Error saving plan ID: ", error.message);
        Alert.alert("Error", "Failed to save plan ID. Please try again.");
      }
    } else {
      Alert.alert("Error", "No authenticated user found.");
    }
  
    navigation.navigate("loader", { idd, sex });
  };

  const renderItem = ({ item }) => {
    const alertText = alertt(weight, item.id, sex);
    return(
      <TouchableOpacity
        style={[styles.bodyContainer, { marginHorizontal: item.margin }]}
        onPress={() => {
          a = alertt(weight, item.weight, sex);
          Alert.alert("Анхаар", `Төлөвлөгөө: ${alertText}\nЗорилго: ${item.weight}\nОдоогийн жин: ${weight}\nСайн бодсон биз?`, 
          [
            {
              text: "Үгүй",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Тийм",
              onPress: () => {
                console.log("OK Pressed");
                handlePress(item.id, sex);
              },
            },
          ]);
        }}
      >
        <Image source={item.image} style={styles.bodyImage} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Жин: {item.weight}</Text>
          <Text style={styles.text}>Булчингийн Масс: {item.mass}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View>
      {/* <TwoButton setSex={setSex} /> */}
      <FlatList
        data={bodyTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.7}
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContainer}
      />
    </View>
  );
};

function alertt(currentW, id, sex) {
  currentW = Number(currentW);
  id = Number(id);
  sex = Number(sex);
  let weight = 15*(5-sex) + (id/sex*10);
  let difference = currentW - weight;
  if (difference < 0) {
    return sex === 1
      ? `Таньд зориулсан булчингийн масс нэмэх 10 долоо хоногийн төлөвлөө байна.`
      : `Таньд зориулсан булчингийн масс нэмэх 6 долоо хоногийн төлөвлөө байна.`;
  } else {
    return `Таньд зориулсан жин хасах 12 долоо хоногийн төлөвлөө байна.`;
  }
};

function calcID(currentW, id, sex) {
  currentW = Number(currentW);
  id = Number(id);
  sex = Number(sex);
  // console.log("Current Weight:", currentW);
  // console.log("ID:", id);
  // console.log("Sex:", sex);
  
  let weight = 15 * (5 - sex) + (id / sex * 10);
  let difference = currentW - weight;
  let idd;
  let tmp = sex === 1 ? 10 : 5;
  
  // console.log("Calculated Weight:", weight);
  // console.log("Difference:", difference);
  // console.log('tmp', tmp);

  if (difference <= 0) {
    if (difference >= -tmp) {
      idd = 1;
    } else if (difference >= (-2) * tmp) {
      idd = 2;
    } else if (difference >= (-3) * tmp) {
      idd = 3;
    } else if (difference >= (-4) * tmp) {
      idd = 4;
    } else {
      idd = 5;
    }
  } else {
    if (difference <= tmp) {
      idd = 6;
    } else if (difference <= 2 * tmp) {
      idd = 7;
    } else if (difference <= 3 * tmp) {
      idd = 8;
    } else if (difference <= 4 * tmp) {
      idd = 9;
    } else {
      idd = 10;
    }
  }
  return idd;
}

function calculateMuscleMass(age, sex) {
  console.log("Age:", age);
  console.log("Sex:", sex);

  let muscleMass;

  switch (sex) {
    case 1:
      switch (true) {
        case age >= 18 && age <= 35:
          muscleMass = 0.42;
          break;
        case age >= 36 && age <= 55:
          muscleMass = 0.38;
          break;
        case age >= 56 && age <= 75:
          muscleMass = 0.34;
          break;
        case age > 75:
          muscleMass = 0.3;
          break;
        default:
          muscleMass = 0.44;
          break;
      }
      break;

    case 2:
      switch (true) {
        case age >= 18 && age <= 35:
          muscleMass = 0.32;
          break;
        case age >= 36 && age <= 55:
          muscleMass = 0.3;
          break;
        case age >= 56 && age <= 75:
          muscleMass = 0.28;
          break;
        case age > 75:
          muscleMass = 0.26;
          break;
        default:
          muscleMass = 0.34;
          break;
      }
      break;

    default:
      muscleMass = "Unknown";
      break;
  }

  return muscleMass;
}

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    marginBottom: width < 500 ? height * 0.47 : height * 0.34,
    left: width < 500 ? 160 : 0,
    paddingHorizontal: width < 800 ? 20 : 20,
  },
  bodyContainer: {
    width: width * 0.7,
    alignItems: "center",
    right: width < 500 ? 150 : 0,
  },
  bodyImage: {
    width: width < 500 ? "110%" : "100%",
    height: height * 0.4,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    color: "#FFFFFF",
    fontSize: width * 0.04,
  },
});

export default BodyTypeCarousel;
