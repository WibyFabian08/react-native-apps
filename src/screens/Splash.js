import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {colors} from '../constants';
import {SplashImage} from '../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 1000);
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.greenPrimary,
      }}>
      <Image resizeMode='cover' style={{width: 50, height: 50}} source={SplashImage}></Image>
      <Text
        style={{
          color: colors.whitePrimary,
          fontSize: 20,
          fontWeight: '500',
          marginTop: 20,
          fontFamily: 'Poppins-SemiBold',
        }}>
        Uwebs Food
      </Text>
    </View>
  );
};

export default Splash;
