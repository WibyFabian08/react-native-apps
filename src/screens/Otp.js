import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import {OTP} from 'react-native-otp-form';

import {AuthLayout} from '../components';

import {colors} from '../constants';

const Otp = ({navigation}) => {
  // const [time, setTime] = useState(60);
  const [otpNum, setOtpNum] = useState([]);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTime((prev) => {
  //       if(prev > 0) {
  //         setIsDisable(true)
  //         return prev - 1;
  //       } else {
  //         return prev
  //       }
  //     })
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <AuthLayout
      otp
      navigation={navigation}
      title="OTP Authentication"
      subTitle="An authentication code has been send to wibyfabian08@maol.com">
      <View style={{flex: 1}}>
        {/* otp */}
        <OTP
          codeCount={4}
          containerStyle={{marginHorizontal: 20}}
          otpStyles={{
            backgroundColor: '#eee',
            padding: 5,
            borderRadius: 15,
          }}
          onTyping={value => setOtpNum(value)}
        />

        <TouchableOpacity
          // onPress={() => setTime(60)}
          style={{
            marginVertical: 5,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: colors.border,
              marginRight: 5,
            }}>
            Didn't receive code?
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: colors.greenPrimary,
            }}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{marginVertical: 10}}>
          <Button
            onPress={() => navigation.replace("MainLayout")}
            color={colors.greenPrimary}
            disabled={otpNum.length != 4}
            title="Continue"></Button>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            color: colors.border,
            marginRight: 5,
            textAlign: 'center',
          }}>
          By signing up, you agree to our
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            color: colors.greenPrimary,
            textAlign: 'center',
          }}>
          Terms and Conditions
        </Text>
      </View>
    </AuthLayout>
  );
};

export default Otp;
