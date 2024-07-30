import React from 'react';
import { Alert, Animated, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../v10d/ProfileScreen';

const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <Text>Screen 1</Text>
    </View>
  );
};

function NavigationButton() {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    switch (routeName) {
      case 'title1':
        icon = 'retweet';
        break;
      case 'ProfileScreen':
        icon = 'user';
        break;
    }

    return (
      <AntDesign name={icon} size={24} color={routeName === selectedTab ? '#9800FF' : 'gray'} />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // console.log(`Navigating to ${routeName}`);
          // Alert.alert(`Navigating to ${routeName}`);
          navigation.navigate(routeName)
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
            onPress={() => Alert.alert('Click Action')}
          >
            <AntDesign name={'home'} color="#9800FF" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name="title1"
        position="LEFT"
        component={Screen1}
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
