import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity, 
  ScrollView,
} from 'react-native';

import Loader from './loader';
import db from '../../db/model/dataModel';
const signup = (props) =>
 {
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [UserMobile, setUserMobile] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  // const [
  //   isRegistraionSuccess,
  //   setIsRegistraionSuccess
  // ] = useState(false);

  const emailInputRef = createRef();
  const mobileInputRef = createRef();
  //const lnameInputRef = createRef();
  const passwordInputRef = createRef();



  
const handleSubmit = () => {
  setErrortext('');
  if (!userFullName) {
    alert('Please fullName');
    return;
  }
 
  if (!userEmail) {
    alert('Please fill E-mail');
    return;
  }
  if (!UserMobile) {
    alert('Please fill mobile number');
    return;
  }
  if (!userPassword) {
    alert('Please fill Password');
    return;
  }
  //Show Loader
  setLoading(true);
  let user = {
    fullName: userFullName,
    email: userEmail,
    mobile: UserMobile,
    password: userPassword,
  };

  db.signUp(user, function(data){
    console.log('result', data)
  })
  

};

  // if (isRegistraionSuccess) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: '#307ecc',
  //         justifyContent: 'center',
  //       }}>
  //       <Image
  //         // source={require('../assets/ok_96px.png')}
  //         style={{
  //           height: 150,
  //           resizeMode: 'contain',
  //           alignSelf: 'center'
  //         }}
  //       />
  //       <Text style={styles.successTextStyle}>
  //         Registration Successful
  //       </Text>
  //       <TouchableOpacity
  //         style={styles.buttonStyle}
  //         activeOpacity={0.5}
  //         onPress={() => props.navigation.navigate('LoginScreen')}>
  //         <Text style={styles.buttonTextStyle}>Login Now</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            //source={require('../assets/twitter_96px.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(FullName) => setUserFullName(FullName)}
              underlineColorAndroid="#f000"
              placeholder="Full Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
     
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userEmail) =>
                setUserEmail(userEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="E-mail"
              placeholderTextColor="#8b9cb5"
              ref={emailInputRef}
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={() =>
                mobileInputRef.current &&
                mobileInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserMobile) => setUserMobile(UserMobile)}
              underlineColorAndroid="#f000"
              placeholder="Mobile Number"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={mobileInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              ref={passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
            {/* onPress={handleSubmitButton}   */}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
           onPress={() => handleSubmit()}>
             {/* props.navigation.replace('dashboard') */}
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default signup;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    backgroundColor:'#fff',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 18,
    height: 50,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});



// const handleSubmitButton = () => {
//   setErrortext('');
//   if (!userFirstName) {
//     alert('Please fill Name');
//     return;
//   }
//   if (!UserLastName) {
//     alert('Please fill Email');
//     return;
//   }
//   if (!userEmail) {
//     alert('Please fill Age');
//     return;
//   }
//   if (!UserMobile) {
//     alert('Please fill Address');
//     return;
//   }
//   if (!userPassword) {
//     alert('Please fill Password');
//     return;
//   }
//   //Show Loader
//   setLoading(true);
//   var dataToSend = {
//     firstname: userFirstName,
//     lastname: UserLastName,
//     email: userEmail,
//     mobile: UserMobile,
//     password: userPassword,
//   };
//   var formBody = [];
//   for (var key in dataToSend) {
//     var encodedKey = encodeURIComponent(key);
//     var encodedValue = encodeURIComponent(dataToSend[key]);
//     formBody.push(encodedKey + '=' + encodedValue);
//   }
//   formBody = formBody.join('&');

//   fetch('http://localhost:3000/api/user/register', {
//     method: 'POST',
//     body: formBody,
//     headers: {
//       //Header Defination
//       'Content-Type':
//       'application/x-www-form-urlencoded;charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((responseJson) => {
//       //Hide Loader
//       setLoading(false);
//       console.log(responseJson);
//       // If server response message same as Data Matched
//       if (responseJson.status === 'success') {
//         setIsRegistraionSuccess(true);
//         console.log(
//           'Registration Successful. Please Login to proceed'
//         );
//       } else {
//         setErrortext(responseJson.msg);
//       }
//     })
//     .catch((error) => {
//       //Hide Loader
//       setLoading(false);
//       console.error(error);
//     });
// };