import {StatusBar} from 'expo-status-bar';
import Svg, {Path} from 'react-native-svg';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Card,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const deposite = ({navigation}) => {
  const USE_LITE_CREDIT_CARD_INPUT = false;
 let  _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
  };

let   _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };
  return (
    <View style={styles.container}>
      <Svg
        height="60%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{position: 'absolute', top: -185}}>
        <Path
          fill="#fff"
          d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>

      {/* <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          height: 100,
          width: 480,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          Amount
        </Text>
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
          {' '}
          ₦ 5000
        </Text>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/mastercard_logo_96px.png')}
            style={{
              width: '70%',
              height: 100,
              resizeMode: 'contain',
              margin: -20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/visa_96px.png')}
            style={{
              width: '70%',
              height: 100,
              resizeMode: 'contain',
              margin: -20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/american_express_96px.png')}
            style={{
              width: '70%',
              height: 100,
              resizeMode: 'contain',
              margin: -20,
            }}
          />
        </TouchableOpacity>
      </View>

{/* 

      <View>
        <TextInput
          placeholder="Card Number"
          placeholderTextColor="#003f5c"
          autoCompleteType="cc-number"
          textContentType="creditCardNumber"
          //keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Expiry Date"
          placeholderTextColor="#003f5c"
          style={styles.input2}
        />
        <TextInput
          placeholder="CVV Code"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          style={styles.input2}
        />
      </View>
      <View>
        <TextInput
          placeholder="Card holder"
          placeholderTextColor="#003f5c"
          style={styles.input}
        />
      </View> */}
       <View style={s.container}>
        { USE_LITE_CREDIT_CARD_INPUT ?
          (<LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={_onFocus}
              onChange={_onChange} />) :
            (<CreditCardInput
                autoFocus

                requiresName
                requiresCVC
              

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={_onFocus}
                onChange={_onChange} />)
        }
      </View>


      <View>
        <TouchableOpacity style={styles.confirm}>
          <Text
            style={{
              margin: 18,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default deposite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    borderColor: 'blue',
    borderWidth: 4,
    height: 70,
    width: 100,
    marginRight: 45,
    borderRadius: 10,
    alignItems: 'center',
  },

  input: {
    borderColor: 'blue',
    borderWidth: 2,
    height: 60,
    width: 470,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },

  input2: {
    borderColor: 'blue',
    borderWidth: 2,
    height: 60,
    width: 220,
    borderRadius: 10,
    marginRight: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  confirm: {
    backgroundColor: 'blue',
    height: 60,
    width: 330,
    borderRadius: 10,
    alignItems: 'center',
  },
});


const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
    
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});