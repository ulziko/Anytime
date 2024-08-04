// PlanList.js
import React, {useContext} from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import UserContext from "../../context/UserContext";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

const { height } = Dimensions.get('window');
const plan_names = ["Enjoy plan", "Killer plan", "Iron discipline plan", 'Monster plan', "Unstopable plan"];

const Plan = () => {
  const User=useContext(UserContext)
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate('Plan')}>
          <View style={styles.plan}>
            <Text style={styles.planTitle}>{plan_names[User.planId-1]}</Text>
          </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate('loader')}>
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
