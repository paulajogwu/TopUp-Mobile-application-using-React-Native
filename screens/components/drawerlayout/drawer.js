import React from 'react';
import {DrawerItems, DrawerNavigatorItems} from 'react-navigation-drawer';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function drawer(props) {
  return (
    <ScrollView>
      <ImageBackground style={{width: undefined, padding: 16, paddingTop: 48}}>
        <Image style={styles.profile} />
        <Text style={styles.name}>User</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>743 Followers</Text>
          <Icon name="people" size={16} color="red" />
        </View>
      </ImageBackground>

      <View style={styles.cobtainer}>
        {/* <DrawerItems
          icon={({size, color}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          label="Home"
        /> */}

        <DrawerNavigatorItems {...props}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cobtainer: {
    flex: 1,
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
});
