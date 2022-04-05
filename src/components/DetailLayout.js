import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

import {colors} from '../constants';
import {BackIcon, CartIcon} from '../assets';

const DetailLayout = ({children, backAction, title, cartAction, hideCart}) => {
  const Header = () => {
    return (
      <View
        style={{
          marginVertical: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={backAction}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: colors.whitePrimary,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            elevation: 6,
            // borderColor: colors.border,
          }}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.border}}
            source={BackIcon}></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: colors.blackPrimary,
            fontSize: 18,
            flex: 1,
            textAlign: 'center',
          }}>
          {title}
        </Text>
        {!hideCart && (
          <TouchableOpacity
            onPress={cartAction}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: colors.greenSecondary,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: colors.error,
                borderRadius: 15 / 2,
                position: 'absolute',
                top: 5,
                right: 5,
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 8, color: colors.whitePrimary}}>1</Text>
            </View>
            <Image
              style={{width: 20, height: 20, tintColor: colors.whitePrimary}}
              source={CartIcon}></Image>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: colors.whitePrimary,
        flex: 1,
      }}>
      <Header></Header>
      {children}
    </View>
  );
};

export default DetailLayout;
