import { StatusBar } from "expo-status-bar";
import Svg, { Path } from 'react-native-svg';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Card,
  TouchableOpacity, SafeAreaView
} from 'react-native';


const dashboard = ({ navigation }) => {
  // const [amount, setAmount] = useState("");
  // const [mobile, setUserMobile] = useState('');
  //const [password, setPassword] = useState("");


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

      
      <View style={{  alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <TouchableOpacity   style={styles.button}>
          <Text style={styles.oneText}>TopUp</Text>

        </TouchableOpacity>
        <TouchableOpacity   style={styles.button}>
        
          <Text style={styles.twoText}>ATM</Text>
         
        

        </TouchableOpacity>
     

      </View>


   

    </View>

  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },

  image: {
    marginBottom: 40,
  },




 


  forgotBtn: {
    marginTop: 40,

  },
  oneBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

  },
  oneText: {
    color: 'white',



  },
  twoBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  twoText: {
    color: 'white',



  },
 


  rowBtn: {
    flex: 1,
    //flexDirection:'row',
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'flex-end', justifyContent: 'flex-end'

  },
  fiveText: {
    color: 'white',



  },
});




  //   useEffect(() => {
  //     db.transaction(function (txn) {
  //       txn.executeSql(
  //         "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
  //         [],
  //         function (tx, res) {
  //           console.log('item:', res.rows.length);
  //           if (res.rows.length == 0) {
  //             txn.executeSql('DROP TABLE IF EXISTS table_user', []);
  //             txn.executeSql(
  //               'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
  //               []
  //             );
  //           }cls

  //         }
  //       );
  //     });
  //   }, []);




  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     paddingHorizontal: 10
  //   },
  //   button: {
  //     alignItems: "center",
  //     backgroundColor: "#DDDDDD",
  //     padding: 10
  //   },
  //   countContainer: {
  //     alignItems: "center",
  //     padding: 10
  //   }
  // });