import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {DetailLayout, FormInput} from '../components';
import {colors} from '../constants';
import {
  MasterCard,
  CrossIcon,
  CorrectIcon,
} from '../assets';

const AddCard = ({navigation}) => {
  const [isFocus, setIsFocus] = useState({
    cardNumber: false,
    name: false,
    expire: false,
    cvv: false,
  });

  const [cardNumberMessage, setCardNumberMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [expireMessage, setExpireMessage] = useState('');
  const [cvvMessage, setCvvMessage] = useState('');

  const [input, setInput] = useState({
    cardNumber: '',
    name: '',
    expire: '',
    cvv: '',
  });
  
  const handleChange = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

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
    if (isFocus.cardNumber) {
      if (input.cardNumber.length >= 9) {
        setCardNumberMessage('');
      } else {
        setCardNumberMessage('Name must be 9 characters');
      }
    } else {
      setCardNumberMessage('');
    }

    if (isFocus.name) {
      if (input.name.length >= 9) {
        setNameMessage('');
      } else {
        setNameMessage('Name must be 9 characters');
      }
    } else {
      setNameMessage('');
    }

    if (isFocus.expire) {
      if (input.expire.length >= 5) {
        setExpireMessage('');
      } else {
        setExpireMessage('Invalid');
      }
    } else {
      setExpireMessage('');
    }

    if (isFocus.cvv) {
      if (input.cvv.length >= 5) {
        setCvvMessage('');
      } else {
        setCvvMessage('Invalid');
      }
    } else {
      setCvvMessage('');
    }
  }, [isFocus, input]);

  return (
    <DetailLayout
      backAction={() => navigation.replace('MyCard')}
      title="ADD NEW CARD">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            resizeMode="cover"
            source={MasterCard}
            style={{
              height: 200,
              padding: 10,
              // borderRadius: 15,
              justifyContent: 'flex-end',
              borderTopLeftRadius: 20
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                color: colors.whitePrimary,
              }}>
              Wiby Fabian Rianto
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: colors.whitePrimary,
              }}>
              973236032923032
            </Text>
          </ImageBackground>

          <View style={{marginVertical: 40}}>
            <FormInput
              value={input.cardNumber}
              onChange={value => handleChange('cardNumber', value)}
              onFocus={() => onFocus('cardNumber', true)}
              onBlur={() => onBlur('cardNumber', false)}
              label="Card Number"
              errorMessage={
                cardNumberMessage.length > 0 ? cardNumberMessage : ''
              }
              icon={cardNumberMessage.length > 0 ? CrossIcon : CorrectIcon}
              placeholder="Card Number"></FormInput>
            <FormInput
              value={input.name}
              onChange={value => handleChange('name', value)}
              onFocus={() => onFocus('name', true)}
              onBlur={() => onBlur('name', false)}
              label="Cardholder Name"
              errorMessage={nameMessage.length > 0 ? nameMessage : ''}
              icon={nameMessage.length > 0 ? CrossIcon : CorrectIcon}
              placeholder="Cardholder Name"></FormInput>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: -10,
              }}>
              <View style={{flex: 1, marginHorizontal: 10}}>
                <FormInput
                  value={input.expire}
                  onChange={value => handleChange('expire', value)}
                  onFocus={() => onFocus('expire', true)}
                  onBlur={() => onBlur('expire', false)}
                  label="Expire Date"
                  errorMessage={expireMessage.length > 0 ? expireMessage : ''}
                  icon={expireMessage.length > 0 ? CrossIcon : CorrectIcon}
                  placeholder="Expire Date"></FormInput>
              </View>
              <View style={{flex: 1, marginHorizontal: 10}}>
                <FormInput
                  value={input.cvv}
                  onChange={value => handleChange('cvv', value)}
                  onFocus={() => onFocus('cvv', true)}
                  onBlur={() => onBlur('cvv', false)}
                  label="CVV"
                  errorMessage={cvvMessage.length > 0 ? cvvMessage : ''}
                  icon={cvvMessage.length > 0 ? CrossIcon : CorrectIcon}
                  placeholder="CVV"></FormInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.greenPrimary,
              paddingHorizontal: 20,
              height: 50,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: colors.whitePrimary,
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Add Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DetailLayout>
  );
};

export default AddCard;
