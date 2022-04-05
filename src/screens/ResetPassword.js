import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';

import {AuthLayout, FormInput} from '../components';
import {CrossIcon, CorrectIcon} from '../assets';

import {colors} from '../constants';

const ResetPassword = ({navigation}) => {
  const [isFocus, setIsFocus] = useState({
    email: false,
  });
  const [emailMessage, setEmailMessage] = useState('');
  const [input, setInput] = useState({
    email: '',
  });

  const handleChange = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  function isValidEmail(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  const onFocus = (name, value) => {
    setIsFocus({
      ...isFocus,
      [name]: value,
    });
  };

  const onBlur = (name, value) => {
    setIsFocus({
      ...isFocus,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isFocus.email) {
      const cek = isValidEmail(input.email);
      if (cek) {
        setEmailMessage('');
      } else {
        setEmailMessage('Invalid Email');
      }
    } else {
      const cek = isValidEmail(input.email);
      if (cek) {
        setEmailMessage('');
      } else {
        setEmailMessage('Invalid Email');
      }
    }
  }, [isFocus, input]);

  return (
    <AuthLayout
      otp
      navigation={navigation}
      title="Password Recovery"
      subTitle="Please enter your email address to recover your password">
      <View style={{flex: 1}}>
        <FormInput
          value={input.email}
          onChange={value => handleChange('email', value)}
          onFocus={() => onFocus('email', true)}
          onBlur={() => onBlur('email', false)}
          label="Email"
          errorMessage={emailMessage.length > 0 ? emailMessage : ''}
          icon={emailMessage.length > 0 ? CrossIcon : CorrectIcon}
          placeholder="Email Address"></FormInput>
      </View>
      <View>
        <View style={{marginVertical: 10}}>
          <Button
            onPress={() => navigation.replace('MainLayout')}
            color={colors.greenPrimary}
            disabled={emailMessage.length > 0 || input.email.length < 1}
            title="Send Email"></Button>
        </View>
      </View>
    </AuthLayout>
  );
};

export default ResetPassword;
