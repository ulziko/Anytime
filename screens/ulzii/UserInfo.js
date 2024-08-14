import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { useProfileImage } from "../../context/ProfileImageContext";
import UserContext from "../../context/UserContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";
import { database } from "../../config/firebase";
import { getDatabase, ref, set, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const { height } = Dimensions.get("window");

const UserInfo = () => {
  const { profileImage, setProfileImage } = useProfileImage();
  const User = useContext(UserContext);
  const [info, setInfo] = useState({
    age: "",
    weight: "",
    height: "",
    userName: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      fetchUserData(userId);
    } else {
      console.log("No user is logged in");
      Alert.alert("Error", "User not logged in. Please login.");
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const userRef = ref(database, `users/${userId}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setInfo({
          age: userData.age || "",
          weight: userData.weight ? `${userData.weight}кг` : "",
          height: userData.height ? `${userData.height}см` : "",
          userName: userData.username || "",
        });
      } else {
        console.log("No data available");
        Alert.alert(
          "Error",
          "Failed to find user data. Please try login again or register again."
        );
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const saveProfileImage = async (downloadURL) => {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const userRef = ref(db, "users/" + userId + "/profileImage");
    await set(userRef, downloadURL);
  };

  return (
    // background image
    <ImageBackground
      source={require("../../assets/top_bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.userInfo}>
        <View style={styles.general_info}>
          <View style={styles.profile_pic}>
            {
              <Image
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("../../assets/user.png")
                }
                style={styles.proimage}
              />
            }
          </View>
          <View style={styles.name}>
            <Text style={styles.greeting}>Тавтай морил!</Text>
            <Text style={styles.userName}>{info.userName}</Text>
          </View>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
              <FontAwesome name="balance-scale" size={20} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{info.weight}КГ</Text>
            <Text style={styles.userDetail}>ЖИН</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
              <MaterialCommunityIcons
                name="human-male-height-variant"
                size={20}
                color="#ffffff"
              />
            </View>
            <Text style={styles.userDetail1}>{info.height}</Text>
            <Text style={styles.userDetail}>ӨНДӨР</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
              <Fontisto name="heartbeat-alt" size={24} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{info.age}</Text>
            <Text style={styles.userDetail}>НАС</Text>
          </View>
        </View>
      </View>
      <View style={styles.quote}>
        <Text style={styles.motto} className="text-2xl">
          Дасгал хөдөлгөөн нь{"\n"}эрүүл амьдралын{"\n"}
          <Text style={[styles.motto, { color: "#9800FF" }]}>үндэс</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "90%",
    height: height * 0.418,
  },
  userInfo: {
    width: "100%",
    height: height * 0.246,
    backgroundColor: "rgba(58, 58, 58, 0.5)",
    borderRadius: 20,
  },
  general_info: {
    padding: 10,
    flexDirection: "row",
  },
  profile_pic: {
    alignItems: "center",
    width: "30%",
    alignContent: "center",
  },
  icon_base: {
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: 100,
    alignItems: "center",
    verticalAlign: "center",
    backgroundColor: "#3A3A3A",
    justifyContent: "center",
  },
  icon: {
    width: "50%",
    height: "50%",
    color: "white",
  },
  proimage: {
    width: height * 0.08,
    height: height * 0.08,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#9800FF",
  },
  name: {
    width: "70%",
    marginVertical: 10,
  },
  quote: {
    marginTop: 10,
    width: "100%",
    height: 130,
    borderRadius: 20,
    backgroundColor: "rgba(58, 58, 58, 0.5)",
  },
  greeting: {
    fontSize: height * 0.02,
    color: "#fff",
  },
  userName: {
    fontSize: height * 0.022,
    fontWeight: "bold",
    color: "#fff",
  },
  userDetails: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  userDetail1: {
    fontSize: height * 0.021,
    marginVertical: 3,
    color: "#9800FF",
  },
  userDetailContainer: {
    alignItems: "center",
    width: "30%",
  },
  userDetail: {
    fontSize: height * 0.022,
    marginVertical: 2,
    color: "#fff",
  },
  motto: {
    // fontSize: height * 0.028,
    color: "#fff",
    margin: height * 0.018,
    paddingLeft: "3%",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserInfo;
