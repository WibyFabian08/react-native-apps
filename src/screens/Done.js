import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Success} from '../assets';
import {colors} from '../constants';

const Done = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.whitePrimary,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Success} style={{height: 200, width: 200}}></Image>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 35,
            color: colors.blackPrimary,
            marginTop: 20,
          }}>
          Congratulations!
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
            color: colors.border,
          }}>
          Payment was successfully made!
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.replace('DeliveryStatus')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 2,
            backgroundColor: colors.greenPrimary,
            paddingHorizontal: 20,
            marginLeft: 10,
            height: 50,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: colors.whitePrimary,
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Done;
