// Home.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavigationButton from "../ulzii/NavigationButton";
import MyComponent from "../ulzii/MyComponent";
import NoPlan from '../ulzii/NoPlan';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyComponent/>
      <NavigationButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
