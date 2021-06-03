import { StatusBar } from "expo-status-bar";
import Svg, { Path } from 'react-native-svg';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //5000ca
  return (
    <View style={styles.container}>
      <Svg
        height='60%'
        width='100%'
        viewBox='0 0 1440 320'
        style={{ position: 'absolute', top: -185 }}
      >
        <Path
          fill='#fff'
          d='M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z'
        />

      </Svg>

      <Image style={styles.image}
        source={require("./assets/circled_user_male_skin_type_7_96px.png")}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.replace('drawers')}>
      <Text style={styles.loginText}>LOGIN</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountBtn} onPress={() => navigation.replace('topup')}>
        <Text style={styles.account_button}>Create An Account</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f51b5",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },

  forgot_button: {
    height: 30,
    color: 'white',
    fontWeight: 'bold'

  },

  loginBtn: {
    width: "65%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",

  },
  loginText: {
    color: 'white',
    fontWeight: 'bold'

  },
  forgotBtn: {
    marginTop: 40,

  },
  account_button: {
    color: 'white',
    fontWeight: 'bold'
  },
  accountBtn: {
    marginTop: 20,
  }
});
