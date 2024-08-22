import React, {useContext, useState, useEffect} from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import UserContext from "../../context/UserContext";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const { height } = Dimensions.get('window');
const plan_names = [
  "Enjoy plan",
  "Killer plan",
  "Iron discipline plan",
  "Monster plan",
  "Unstoppable plan",
  "Beast mode plan",
  "Champion plan",
  "Titan strength plan",
  "Ultimate endurance plan",
  "Warrior spirit plan"
];

const Plan = () => {
  const User=useContext(UserContext)
  const navigation = useNavigation();
  const [sex, setSex] = useState(); 
  const [idd, setId] = useState();

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
          setId(data.planId);
        } else {
          console.log("No data available");
        }
      });
    };
  fetchUserName();
}, []);

  return (
  <View style={styles.container}>
    <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate(
      'Plan', 
      {
        idd: idd,
        sex: sex,
      })}
    >
          <View style={styles.plan}>
            <Text style={styles.planTitle}>{plan_names[idd-1]}</Text>
          </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate('FitnessApp')}>
        <View style={styles.plan}>
          <AntDesign name="plus" size={26} color="white" alignSelf="center"/>
        </View>
      </TouchableOpacity>
  </View>
  )};

const styles = StyleSheet.create({
  container: {
    height: height*0.24,
    width: "90%",
  },
  scrollView: {
    paddingVertical: height*0.01,
  },
  plansContainer: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  plan: {
    height: height*0.09,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(152, 0, 255, 0.3)",
    borderRadius: 20,
    borderColor: "#9800FF",
    borderWidth:2,
    padding: 10,
    marginVertical: 5,
  },
  planTitle: {
    textAlign: 'center',
    fontSize: height*0.02,
    paddingBottom: 10,
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
  },
  planDate: {
    textAlign:'right',
    color: "#fff",
  },
  addButton: {
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Plan;
