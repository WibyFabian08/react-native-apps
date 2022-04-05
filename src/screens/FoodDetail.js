import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {DetailLayout} from '../components';
import DummyData from '../../constants/dummyData';
import {StarIcon} from '../assets';
import {colors} from '../constants';

const FoodDetail = ({navigation}) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(15);
  const [selectSize, setSelectSize] = useState(12);
  const SIZES = [
    {
      id: 1,
      value: 12,
    },
    {
      id: 2,
      value: 14,
    },
    {
      id: 3,
      value: 16,
    },
    {
      id: 4,
      value: 18,
    },
    {
      id: 5,
      value: 20,
    },
  ];

  const handleAdd = () => {
    if (qty <= 10) {
      setQty(qty + 1);
    }
  };

  const handleMin = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return (
    <DetailLayout
      backAction={() => navigation.replace('MainLayout')}
      cartAction={() => navigation.replace('MyChart')}
      title="DETAILS">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 15,
              backgroundColor: colors.grayBg,
              marginVertical: 5,
              marginHorizontal: 20,
              position: 'relative',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={DummyData.listMenu[0].image}
                style={{width: 150, height: 150}}
              />
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 3,
                position: 'absolute',
                top: 5,
                left: 5,
              }}>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 25,
                color: colors.blackPrimary,
              }}>
              Hamburger
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: colors.border,
                textAlign: 'justify',
              }}>
              A popular spice and vegetables mixed favoured rice dish wich is
              typicalu prepared by latering the biryani gravy and basmati rice
              in flat bottom vessel.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.greenPrimary,
                paddingHorizontal: 15,
                paddingVertical: 7,
                borderRadius: 10,
              }}>
              <Image
                style={{width: 20, height: 20, tintColor: colors.whitePrimary}}
                source={StarIcon}></Image>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: colors.whitePrimary,
                  marginLeft: 5,
                  marginTop: 5,
                }}>
                4.5
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: colors.blackPrimary,
                marginHorizontal: 20,
              }}>
              30 mins
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: colors.blackPrimary,
              }}>
              $ Free shipping
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              color: colors.blackPrimary,
              marginLeft: 20,
              marginTop: 20
            }}>
            Sizes:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingBottom: 50,
            }}>
            {SIZES.map((data, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectSize(data.value)}
                  key={index}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor:
                      selectSize == data.value
                        ? colors.greenPrimary
                        : colors.whitePrimary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    elevation: selectSize == data.value ? 0 : 4,
                    borderColor: colors.border,
                    marginRight: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color:
                        selectSize == data.value
                          ? colors.whitePrimary
                          : colors.border,
                      fontSize: 16,
                    }}>
                    {data.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 80,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: colors.grayBg,
            paddingHorizontal: 15,
            borderRadius: 10,
            height: 50,
          }}>
          <TouchableOpacity onPress={() => handleMin()}>
            <Text
              style={{color: colors.blackPrimary, fontSize: 40, marginTop: -5}}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: colors.blackPrimary,
              fontSize: 20,
              fontFamily: 'Poppins-Semibold',
            }}>
            {qty}
          </Text>
          <TouchableOpacity onPress={() => handleAdd()}>
            <Text style={{color: colors.greenPrimary, fontSize: 30}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('MyChart')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
            Buy
          </Text>
          <Text
            style={{
              color: colors.whitePrimary,
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
            }}>
            ${price * qty}.00
          </Text>
        </TouchableOpacity>
      </View>
    </DetailLayout>
  );
};

export default FoodDetail;
