import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {MenuIcon, Salah} from '../assets';
import {colors} from '../constants';

const Header = ({navigation}) => {
  const {selectedTab} = useSelector(state => state.drawerReducer);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: colors.whitePrimary,
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={MenuIcon}></Image>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            // fontWeight: 'bold',
            color: colors.blackPrimary,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {selectedTab}
        </Text>
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 15,
          borderColor: colors.border,
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 10}}
          source={Salah}></Image>
      </View>
    </View>
  );
};

export default Header;
