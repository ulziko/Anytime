import React, { useContext, useState, useEffect } from 'react';
import { Alert, Animated, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../v10d/ProfileScreen';
import WorkoutContainer from '../enkheelei/WorkoutContainer';
import UserContext from "../../context/UserContext";
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <Text>Screen 1</Text>
    </View>
  );
};

function NavigationButton() {
  const User = useContext(UserContext);
  const navigation = useNavigation();
  const [sex, setSex] = useState(); 
  const [id, setId] = useState();

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
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    switch (routeName) {
      case 'Workout':
        icon = 'retweet';
        break;
      case 'ProfileScreen':
        icon = 'user';
        break;
    }

    return (
      <AntDesign name={icon} size={24} color='gray' />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // console.log(`Navigating to ${routeName}`);
          // Alert.alert(`Navigating to ${routeName}`);
          // navigation.navigate(routeName)
          if (routeName=='ProfileScreen') {
            navigation.navigate(routeName);
          } else if(User.plan){
            navigation.navigate(
              'Plan', 
              {
                id: id,
                sex: sex,
              })
          }else {
            Alert.alert('Дасгалын заавар харахийн тул эхлээд төлөвлөгөө үүсгэнэ үү.');
          }
        }}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      circlePosition="CENTER"
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      height={55}
      circleWidth={50}
      bgColor="#1E1E1E"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
          >
            <AntDesign name={'home'} color="#9800FF" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name="Workout"
        position="LEFT"
        component={WorkoutContainer}
      />
      <CurvedBottomBarExpo.Screen
        name="ProfileScreen"
        position="RIGHT"
        component={ProfileScreen}
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  screen2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEBCD',
  },
});

export default NavigationButton;
