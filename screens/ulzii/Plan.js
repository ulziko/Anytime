// PlanList.js
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

const { height } = Dimensions.get('window');

const Plan = ({ plans, addNewPlan }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.plansContainer}>
        {plans.map((plan) => (
          <View style={styles.plan}>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planDate}>үүсгэсэн: {plan.date}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addNewPlan}>
        <View style={styles.plan}>
          <AntDesign name="plus" size={26} color="white" alignSelf="center"/>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: height*0.24,
    width: "90%",
  },
  scrollView: {
    paddingVertical: height*0.012,
  },
  plansContainer: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  plan: {
    height: height*0.09,
    justifyContent: "center",
    backgroundColor: "rgba(152, 0, 255, 0.3)",
    borderRadius: 20,
    borderColor: "#9800FF",
    borderWidth:2,
    padding: 10,
    marginVertical: 5,
  },
  planTitle: {
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
