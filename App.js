/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import splashScreen from './screens/components/splashScreen';
import Login from './screens/components/Login';
import signup from './screens/components/signup';
import topup from './screens/components/topup';
//import {Provider as PaperProvider} from 'react-native-paper';
//import drawers from './screens/components/drawers';
import Deposite from './screens/components/pages/Deposite';
import Transaction from './screens/components/pages/Transaction';
//import Drawer from './screens/components/drawerlayout/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';

import {drawer} from './screens/components/topup';

const Stack = createStackNavigator();

const Auth = ({navigation}) => {
  // Stack Navigator for Login and Sign up Screen
  let nav = drawer;
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="signup"
        component={signup}
        options={{
          title: 'Sign-Up', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 20,
            textAlign: 'center',
          },
          headerLeft: () => (
            <Icons
              name="arrowleft"
              color="#ffff"
              size={30}
              style={{marginLeft: 20}}
              onPress={() => navigation.navigate('LoginScreen')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="deposite"
        component={Deposite}
        options={{
          title: 'Payment', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 20,
            textAlign: 'center',
          },
          headerLeft: () => (
            <Icons
              name="arrowleft"
              color="#ffff"
              size={30}
              style={{marginLeft: 20}}
              onPress={() => navigation.navigate('topup')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          title: 'Transactions', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 20,
            textAlign: 'center',
          },
          headerLeft: () => (
            <Icons
              name="arrowleft"
              color="#ffff"
              size={30}
              style={{marginLeft: 20}}
              onPress={() => navigation.navigate('topup')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="topup"
        component={topup}
        options={{
          headerShown: false,
          //   title: 'Topup Now', //Set Header Title
          //   headerStyle: {
          //     backgroundColor: '#307ecc', //Set Header color
          //   },
          //   headerTintColor: '#fff', //Set Header text color
          //   headerTitleStyle: {
          //     fontWeight: 'bold', //Set Header text style
          //     fontSize: 22,
          //     textAlign: 'center',
          //   },
          //   headerLeft: () => (
          //     <Icon
          //       name="bars"
          //       color="#ffff"
          //       size={35}
          //       style={{marginLeft: 20}}
          //       onPress={() => topup.drawer.openDrawer()}
          //     />
          //   ),
          //   headerLeftContainerStyle: {
          //     marginRight: 230,
          //   },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splashScreen">
            {/* SplashScreen which will come once for 5 Seconds */}
            <Stack.Screen
              name="SplashScreen"
              component={splashScreen}
              // Hiding header for Splash Screen
              options={{headerShown: false}}
            />
            {/* Auth Navigator: Include Login and Signup */}
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
