import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {Logo, FBIcon, GoogleIcon} from '../assets';
import {colors} from '../constants';

const AuthLayout = ({children, navigation, title, subTitle, otp}) => {
  const Header = () => {
    return (
      <View style={{marginTop: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.greenPrimary,
              height: 70,
              width: 70,
              borderRadius: 15,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={Logo}
              style={{tintColor: colors.whitePrimary}}></Image>
          </View>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 30,
              fontFamily: 'Poppins-SemiBold',
              color: colors.greenPrimary,
            }}>
            UwebsEat
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: colors.blackPrimary,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: colors.border,
              textAlign: 'center',
            }}>
            {subTitle}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.whitePrimary,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Header></Header>
        <View
          style={{
            flex: 1,
            marginVertical: 20,
            paddingHorizontal: 20,
            width: '100%',
            flexDirection: 'column',
          }}>
          {children}
        </View>
        {!otp && (
          <View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.replace('Register')}
                style={{
                  backgroundColor: colors.bluePrimary,
                  paddingVertical: 10,
                  borderRadius: 5,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 10}}
                  source={FBIcon}></Image>
                <Text
                  style={{
                    color: colors.whitePrimary,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Continue With Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.replace('Register')}
                style={{
                  backgroundColor: colors.grayBg,
                  paddingVertical: 10,
                  borderRadius: 5,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 10}}
                  source={GoogleIcon}></Image>
                <Text
                  style={{
                    color: colors.blackSecondary,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Continue With Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AuthLayout;
