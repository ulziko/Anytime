import { StyleSheet, View } from "react-native";
import NavigationButton from "../ulzii/NavigationButton";
import MyComponent from "../ulzii/MyComponent";

export default function Home() {
  return (
    <View style={styles.container}>
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
