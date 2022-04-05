import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {colors} from '../constants';
import {Check, DotIcon} from '../assets/images';

const DeliveryStatus = ({navigation}) => {
  const [step, setStep] = useState(3);
  const [deliveryStatus, setDeliveryStatus] = useState([
    {
      title: 'Order Confirmed',
      subTitle: 'Your order has been received',
    },
    {
      title: 'Order Prepared',
      subTitle: 'Your order has been prepared',
    },
    {
      title: 'Delivery In Progress',
      subTitle: 'Hang on your food is on the way',
    },
    {
      title: 'Delivered',
      subTitle: 'Enjoy your meal!',
    },
    {
      title: 'Rate Us',
      subTitle: 'Help us improve our service',
    },
  ]);

  return (
    <View style={{backgroundColor: colors.whitePrimary, padding: 20, flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, paddingBottom: 50}}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 10,
              fontFamily: 'Poppins-SemiBold',
              color: colors.blackPrimary,
              fontSize: 16,
            }}>
            DELIVERY STATUS
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
              color: colors.border,
              fontSize: 12,
            }}>
            DELIVERY STATUS
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: colors.blackPrimary,
              fontSize: 20,
            }}>
            12 Sept 2022 / 12:30PM
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.whitePrimary,
            marginTop: 30,
            padding: 20,
            borderRadius: 10,
            elevation: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: colors.blackPrimary,
              }}>
              Track Order
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: colors.border,
              }}>
              NY02ISNI
            </Text>
          </View>
          <View
            style={{
              height: 1,
              elevation: 1,
              backgroundColor: colors.border,
              marginVertical: 20,
            }}></View>
          <View>
            {deliveryStatus.map((data, index) => {
              return (
                <View key={index}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          tintColor:
                            index < step ? colors.greenPrimary : '#eee',
                        }}
                        source={Check}></Image>
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          color: colors.blackPrimary,
                          fontSize: 16,
                        }}>
                        {data.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: colors.border,
                          fontSize: 14,
                        }}>
                        {data.subTitle}
                      </Text>
                    </View>
                  </View>
                  {index < deliveryStatus.length - 1 && (
                    <View>
                      {index < step && (
                        <View
                          style={{
                            height: 30,
                            width: 2,
                            backgroundColor: colors.greenPrimary,
                            marginLeft: 25,
                          }}></View>
                      )}

                      {index >= step && (
                        <Image
                          source={DotIcon}
                          style={{height: 30, width: 30, marginLeft: 10}}
                          resizeMode="contain"></Image>
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
</ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: -5,
        }}>
        {step < 5 && (
          <TouchableOpacity
            onPress={() => navigation.replace('MainLayout')}
            style={{
              backgroundColor: colors.grayBg,
              paddingVertical: 15,
              borderRadius: 7,
              marginHorizontal: 5,
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.greenPrimary,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}

        {step < 5 ? (
          <TouchableOpacity
            onPress={() => navigation.replace('Maps')}
            style={{
              backgroundColor: colors.greenPrimary,
              paddingVertical: 15,
              borderRadius: 7,
              marginHorizontal: 5,
              flex: 2,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.whitePrimary,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Map View
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={() => navigation.replace('MainLayout')}
            style={{
              backgroundColor: colors.greenPrimary,
              paddingVertical: 15,
              borderRadius: 7,
              marginHorizontal: 5,
              flex: 1,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.whitePrimary,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DeliveryStatus;
