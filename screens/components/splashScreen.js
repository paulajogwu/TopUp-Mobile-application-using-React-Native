import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
//import { openDatabase } from 'react-native-sqlite-storage';
 
//var db = openDatabase({ name: 'User', createFromLocation:'database/User.db'});

import LottieView from 'lottie-react-native'
const splashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      
        navigation.replace(
        'Auth' 
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
      style={{width: '90%', resizeMode: 'contain', margin: 30,  borderRadius:150/2, backgroundColor:'white'}}
      source={require('./assets/log2.png')}
        
      /> */}

      <LottieView 
   
       source={require('./assets/11753-meda-chat-airtime-voucher-topup.json')}
       autoplay
       loop={false} 
    />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

//https\://services.gradle.org/distributions/gradle-6.7-all.zip
