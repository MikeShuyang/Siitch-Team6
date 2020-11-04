import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Vs = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            height: Height / 10,
            backgroundColor: '#00ADEF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{
            color: 'white',
            width: Width / 3,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: Width / 20,
          }}>
            One Pound {'\n'} of this
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 30,
              textAlign: 'center',
              fontSize: 20,
            }}>
            =
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 20,
              width: Width / 2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            This many gallons{'\n'} of water
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.beef_steak} style={{width:60,height:60,marginLeft: '10%'}} resizeMode='contain'/>
          <View style={{width: width / 3, alignItems: 'center'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 30, height: 30}}
            />
          </View>

          <View style={{
              flexDirection: 'row',
              width: width / 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#3AADFA',
                lineHeight: 30,
              }}>
              1,847
            </Text>
            <Text style={{fontSize: 15, marginLeft: '2%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.pig_vs} style={{width:60,height:60,marginLeft: '10%'}} resizeMode='contain'/>
          <View style={{width: width / 3, alignItems: 'center'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: width / 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#3AADFA',
                lineHeight: 30,
              }}>
              718
            </Text>
            <Text style={{fontSize: 15, marginLeft: '2%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.chicken} style={{width:60,height:60,marginLeft: '10%'}} resizeMode='contain'/>
          <View style={{width: width / 3, alignItems: 'center'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: width / 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#3AADFA',
                lineHeight: 30,
              }}>
              518
            </Text>
            <Text style={{fontSize: 15, marginLeft: '2%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image  source={images.tofu} style={{width:60,height:60,marginTop: '2%',marginLeft: '10%'}} resizeMode='contain'/>
          <View style={{width: width / 3, alignItems: 'center'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: width / 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#3AADFA',
                lineHeight: 30,
              }}>
              302
            </Text>
            <Text style={{fontSize: 15, marginLeft: '2%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('What')}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            height: 50,
            borderWidth: 2,
            borderColor: '#8DC73F',
            borderRadius: 20, 
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'10%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
          <Text style={{fontSize:16}}>Ranked in no particular order.</Text>
        </View>
        <View  style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://impossiblefoods.com/grocery/')}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.beyondmeat.com/')}}>
            <Image source={images.beyond_meat} style={{width:170,height:170}}></Image>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://lightlife.com/')}}>
              <ImageIcon category='brand' image={images.lightlife}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.hungryplanetfoods.com/')}}>
              <ImageIcon category='brand' image={images.hungry_planet}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.nextlevelburger.com/')}}>
              <ImageIcon category='brand' image={images.nextlevel}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.quorn.us/')}}>
              <ImageIcon category='brand' image={images.quorn}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.bocaburger.com/')}}>
              <ImageIcon category='brand' image={images.boca}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.gardein.com/')}}>
              <ImageIcon category='brand' image={images.gardein}></ImageIcon>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Vs;
