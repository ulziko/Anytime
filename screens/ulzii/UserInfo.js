import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const UserInfo = ({ Name, Age, Height, Weight }) => {
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
                source={require("../../assets/profile_picture.png")}
                style={styles.proimage}
              />
            }
          </View>
          <View style={styles.name}>
            <Text style={styles.greeting}>Тавтай морил!</Text>
            <Text style={styles.userName}>{Name}</Text>
          </View>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
              <FontAwesome name="balance-scale" size={20} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{Weight}КГ</Text>
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
            <Text style={styles.userDetail1}>{Height}</Text>
            <Text style={styles.userDetail}>ӨНДӨР</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
              <Fontisto name="heartbeat-alt" size={24} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{Age}</Text>
            <Text style={styles.userDetail}>НАС</Text>
          </View>
        </View>
      </View>
      <View style={styles.quote}>
        <Text style={styles.motto}>
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
    fontSize: height * 0.035,
    color: "#fff",
    margin: height * 0.018,
    paddingLeft: "3%",
    textAlign: "left",
  },
});

export default UserInfo;
