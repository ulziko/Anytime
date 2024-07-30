import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Arrow = ({ delay, direction }) => {
  const opacity = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0, duration: 1000, useNativeDriver: true, delay }),
        Animated.timing(opacity, { toValue: 1, duration: 3000, useNativeDriver: true })
      ])
    ).start();
  }, [delay]);

  return (
    <Animated.View style={[styles.arrow, { opacity }]}>
       {direction=='R'? (
        <>
       <View style={styles.arrowPart02} />
       <View style={styles.arrowPart} />
       </>
     ) : (
      <>
      <View style={styles.arrowPart} />
      <View style={styles.arrowPart02} />
      </>
     )}
    </Animated.View>
  );
};

const { height } = Dimensions.get('window');

const NoPlan = () => {
  const navigation = useNavigation();
  return(
  <View style={styles.noPlanContainer}>
    <View style={styles.addButton}>
    <TouchableOpacity onPress={() => navigation.navigate('FitnessApp')}>
    <View style={styles.row_container}>
    <View style={styles.arrowContainer}>
      <Arrow delay={0} direction='L' />
      <Arrow delay={500}  direction='L' />
      <Arrow delay={600}  direction='L' />
      </View>
    <Text style={styles.plan_date}> Шинэ төлөвлөгөө {'\n'} үүсгэх</Text>
    <View style={styles.arrowContainer}>
      <Arrow delay={600}  direction='R' />
      <Arrow delay={500}  direction='R'/>
      <Arrow delay={0}   direction='R'/>
      </View>
    </View>
    </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  noPlanContainer: {
    width:'100%',
    height: height*0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    padding: 10,
    width: '90%',
    height:height*0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(152, 0, 255, 0.3)",
    borderRadius: 20,
    borderColor: "#9800FF",
    borderWidth:2,
  },
  row_container:{
    flexDirection: 'row',
    overflow: 'scroll'
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plan_date: {
    marginVertical:2,
    width: '60%',
    padding:2,
    alignSelf:'center',
    fontWeight: "bold",
    textAlign:'center',
    fontSize: height*0.025,
    color: "#fff",
   },
   arrowContainer: {
    width:'20%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  arrow: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
  },
  arrowPart: {
    width: 15,
    height: 15,
    backgroundColor: '#9800FF',
    marginHorizontal:3,
    transform: [{ skewY: '45deg' }],
  },
  arrowPart02: {
    marginHorizontal:3,
    width: 15,
    height: 15,
    backgroundColor: '#9800FF',
    transform: [{ skewY: '135deg' }],
  },
  
});
export default NoPlan;
