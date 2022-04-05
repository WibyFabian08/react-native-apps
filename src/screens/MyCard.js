import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {DetailLayout} from '../components';
import {colors} from '../constants';
import dummyData from '../../constants/dummyData';

const MyCard = ({navigation}) => {
  const [selectCard, setSelectCard] = useState(null);

  return (
    <DetailLayout
      backAction={() => navigation.replace('MyChart')}
      title="MY CARDS">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dummyData.myCards.map((data, index) => {
            return (
              <TouchableOpacity style={{marginBottom: 10}} key={index}>
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: colors.border,
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
                    {/* <View
                      style={{
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 20 / 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          backgroundColor: colors.greenPrimary,
                          borderRadius: 12 / 2,
                        }}></View>
                    </View> */}
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
              Add new card
            </Text>
          </View>
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
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.replace('AddCard')}
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
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DetailLayout>
  );
};

export default MyCard;
