import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {DetailLayout} from '../components';
import {colors} from '../constants';
import dummyData from '../../constants/dummyData';
import {FocusIcon} from '../assets';

const Checkout = ({navigation}) => {
  const [selectCard, setSelectCard] = useState(null);

  return (
    <DetailLayout
      backAction={() => navigation.replace('MyChart')}
      title="CHECKOUT">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dummyData.payments.map((data, index) => {
            return (
              <TouchableOpacity
                style={{marginBottom: 10}}
                key={index}
                onPress={() => setSelectCard(data)}>
                <View
                  style={{
                    borderWidth:
                      selectCard !== null && selectCard.id == data.id ? 3 : 2,
                    borderRadius: 10,
                    borderColor:
                      selectCard !== null && selectCard.id == data.id
                        ? colors.greenPrimary
                        : colors.border,
                    height: 120,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                    }}>
                    <View
                      style={{
                        borderWidth: 0.5,
                        borderColor: colors.border,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginRight: 10,
                      }}>
                      <Image
                        style={{width: 50, height: 50}}
                        source={data.icon}></Image>
                    </View>
                    <Text
                      style={{
                        flex: 6,
                        fontFamily: 'Poppins-Bold',
                        color: colors.blackPrimary,
                        fontSize: 18,
                      }}>
                      {data.name}
                    </Text>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor:
                          selectCard !== null && selectCard.id == data.id
                            ? colors.greenPrimary
                            : colors.border,
                        borderRadius: 20 / 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {selectCard !== null && selectCard.id == data.id && (
                        <View
                          style={{
                            height: 12,
                            width: 12,
                            backgroundColor: colors.greenPrimary,
                            borderRadius: 12 / 2,
                          }}></View>
                      )}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: colors.blackPrimary,
                fontSize: 18,
              }}>
              Delivery Address
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: colors.border,
                height: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: colors.blackPrimary,
                    marginRight: 15,
                  }}
                  source={FocusIcon}></Image>
                <Text
                  style={{
                    flex: 6,
                    fontFamily: 'Poppins-Regular',
                    color: colors.blackPrimary,
                    fontSize: 18,
                  }}>
                  Jl. Raya Simpang Kabupaten Garut
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 1
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: colors.blackPrimary,
              }}>
              Subtotal:
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: colors.blackPrimary,
              }}>
              $37.97
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: colors.blackPrimary,
              }}>
              Shipping fee:
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: colors.blackPrimary,
              }}>
              $0.00
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.border,
            marginVertical: 10,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              color: colors.blackPrimary,
            }}>
            Total:
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              color: colors.blackPrimary,
            }}>
            $37.97
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.replace('Done')}
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
              Place your Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DetailLayout>
  );
};

export default Checkout;
