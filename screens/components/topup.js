import {StatusBar} from 'expo-status-bar';
import Svg, {Path} from 'react-native-svg';
import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  DrawerLayoutAndroid,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Card, Divider, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
const topup = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  let [amount, setAmount] = useState('');
  let [number, setUserMobile] = useState('');
  let [price, setPrice] = useState('');
  let [detail, setLineDetail] = useState({});
  let [success, setTopup] = useState({});

  let operatorId = detail.operatorId;

  const list = [
    {
      title: 'Deposite',
      icon: 'money-bill-wave',
      Press:'deposite'
    },
    {
      title: 'Transactions',
      icon: 'file-invoice-dollar',
      Press:'Transaction'
    },
    {
      title: 'Helps & Feedback',
      icon: 'question-circle',
      Press:'deposite'
    },
    {
      title: 'Setting',
      icon: 'cogs',
      Press:'signup'
    
    },
    //... // more items
  ];

  //const [operator, setOperator] = useState(1);
  console.log('success', success.message);
  const Popup = () => {
    let operator = 1;
    if (operator == 0) {
      return (
        <View style={{marginBottom: 40}}>
          <Card>
            <Card.Image source={{uri: detail.logoUrls[1]}}></Card.Image>
            <Text style={{fontFamily: 'Arial', fontSize: 20}}>
              {detail.name}
            </Text>
          </Card>
        </View>
      );
    } else {
      return <Text>Nothing</Text>;
    }
  };
  const Getoperator = () => {
    let number = '+2348025403419';
    fetch(
      'https://topups.reloadly.com/operators/auto-detect/phone/' +
        number +
        '/countries/CO',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/com.reloadly.topups-v1+json',
          Authorization:
            'Bearer eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0OTI0IiwiaXNzIjoiaHR0cHM6Ly9yZWxvYWRseS5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6ZmFsc2UsImh0dHBzOi8vcmVsb2FkbHkuY29tL3ByZXBhaWRVc2VySWQiOiI0OTI0IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYucmVsb2FkbHkuY29tIiwibmJmIjoxNjIwNjE2ODE5LCJhenAiOiI0OTI0Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE2MjU4MDA4MTksImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImI0MmY4N2FhLTRkYmYtNDgzMy04MzViLWVkNWQ3YTBhOTFkYSIsImlhdCI6MTYyMDYxNjgxOSwianRpIjoiMWM5MTZlMzItNzhkNy00ZmUzLTg4YTctOWQ1OWM5OThhMDBjIn0.CMfn-kLAYmov6COoP7JgdgCxaLbDhyzYk3nrK19iK0E',
        },
      },
    )
      .then(response => response.json())
      .then(response => setLineDetail(response));
  };
  //console.log('detail:',detail.name,detail.logoUrls[0] );
  //Getoperator();

  const Topup = () => {
    if (number == 0) {
      alert('Please enter mobile number');
    } else if (number == 11) {
      alert('mobile number must not be less than 11');
    } else if (number > 11) {
      alert('mobile number must not be greater than 11');
    } else {
      const countryCode = 'NG';
      let recipientPhone = {countryCode, number};
      fetch('https://topups.reloadly.com/topups', {
        method: 'POST',
        body: JSON.stringify({recipientPhone, operatorId, amount}),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/com.reloadly.topups-v1+json',
          Authorization:
            'Bearer eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0OTI0IiwiaXNzIjoiaHR0cHM6Ly9yZWxvYWRseS5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6ZmFsc2UsImh0dHBzOi8vcmVsb2FkbHkuY29tL3ByZXBhaWRVc2VySWQiOiI0OTI0IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYucmVsb2FkbHkuY29tIiwibmJmIjoxNjIwNjE2ODE5LCJhenAiOiI0OTI0Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE2MjU4MDA4MTksImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImI0MmY4N2FhLTRkYmYtNDgzMy04MzViLWVkNWQ3YTBhOTFkYSIsImlhdCI6MTYyMDYxNjgxOSwianRpIjoiMWM5MTZlMzItNzhkNy00ZmUzLTg4YTctOWQ1OWM5OThhMDBjIn0.CMfn-kLAYmov6COoP7JgdgCxaLbDhyzYk3nrK19iK0E',
        },
      })
        .then(response => response.json())
        .then(response => setTopup(response));
    }
  };

  const navigationView = () => (
    // <View style={[styles.container, styles.navigationContainer]}>

    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={{width: undefined, padding: 16, paddingTop: 48}}>
          <Image
            style={styles.profile}
            source={require('./assets/circled_user_male_skin_type_7_96px.png')}
          />
          <Text style={styles.name}>User </Text>
          <View style={{flexDirection: 'row'}}>
            <Text>743 Followers </Text>
            <Icon name="user" size={16} color="red" />
          </View>
        </ImageBackground>
      </View>
      <Divider style={{backgroundColor: 'blue', fontSize: 20}} />
      {list.map((item, i) => (
        console.log(item.Press),
        <ListItem key={i} bottomDivider onPress={() => navigation.navigate(item.Press)} >
          <Icon name={item.icon} color="red" size={25} />
          <ListItem.Content style={{alignItems: 'flex-start'}}  >
            <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          {/* <ListItem.Chevron />  onPress={() => navigation.replace({{item.Press}})}*/}
        </ListItem>
      ))}

      <Divider style={{backgroundColor: 'blue', fontSize: 20}} />
      <TouchableOpacity onPress={() => drawer.current.closeDrawer()} style={{backgroundColor:'pink'}}>
      <Icon name="bars" color="red" size={25} />
      </TouchableOpacity>
      {/* <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      /> */}
    </ScrollView>

    // </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <View style={styles.Icons}>
          <Icon
            name="bars"
            color="black"
            size={35}
            style={{marginLeft: 20}}
            onPress={() => drawer.current.openDrawer()}
          />
        </View>
        <View>
          <Popup />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChange={e => setUserMobile(e.target.value)}
            onC
            underlineColorAndroid="#f000"
            placeholder="Mobile Number"
            placeholderTextColor="#8b9cb5"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Amount"
            placeholderTextColor="#003f5c"
            defaultValue={amount}
            onChange={e => setPrice(e.target.value)}
            keyboardType="numeric"
            editable={false}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.oneBtn}
            onPress={() => setAmount(' 100')}>
            <Text style={styles.oneText}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.twoBtn}
            onPress={() => setAmount(' 200')}>
            <Text style={styles.twoText}> 200</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.threeBtn}
            onPress={() => setAmount(' 500')}>
            <Text style={styles.threeText}> 500</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fourBtn}
            onPress={() => setAmount(' 1000')}>
            <Text style={styles.fourText}> 1000</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() => Topup()}>
          <Text style={styles.loginText}>Top-Up</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};
module.exports = topup;
export default topup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icons: {
    flexShrink: 1,
    top: -155,
    right: 190,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8,
  },
  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    width: '90%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    //flex: -1,
    padding: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    borderWidth: 3,
    borderColor: '#307ecc',
    borderRadius: 10,

    width: 500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  forgot_button: {
    height: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '65%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotBtn: {
    marginTop: 40,
  },
  oneBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  oneText: {
    color: 'white',
  },
  twoBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  twoText: {
    color: 'white',
  },
  threeBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  threeText: {
    color: 'white',
  },
  fourBtn: {
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fourText: {
    color: 'white',
  },
  rowBtn: {
    //flex: 1,
    //flexDirection:'row',
    backgroundColor: 'green',
    width: 85,
    height: 40,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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

// <Svg
// height="60%"
// width="100%"
// viewBox="0 0 1440 320"
// style={{position: 'absolute', top: -185}}>
// <Path
//   fill="#fff"
//   d="M0,96L48,112C96,128,192,160,288,186.7C384
//     ,213,480,235,576,213.3C672,192,768,128,864,
//     128C960,128,1056,192,1152,208C1248,224,1344,192,
//     1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
//     1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
//     384,0,288,0C192,0,96,0,48,0L0,0Z"
// />
// </Svg>
