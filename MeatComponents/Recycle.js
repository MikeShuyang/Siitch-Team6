import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Recycle = ({navigation}) => {
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.meats}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to {'\n'}grow
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
          }}>
          3 yrs
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.compost}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
          }}>
          Professional Only
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: Height / 20,
        }}>
        <Image
          source={images.clock}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to{'\n'}decompose
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
            alignItems: 'center',
          }}>
          2 Months
        </Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#00FF00"
        style={{
          backgroundColor: '#00FF00',
          width: Width / 2,
          height: Height / 15,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 4,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Recycle;
