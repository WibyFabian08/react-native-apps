import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import {Logo} from '../assets';
import {colors} from '../constants';
import data from '../../constants/constants';

const OnBoarding = ({navigation}) => {
  const flatListRef = useRef(null);
  const [dotIndex, setDotindex] = useState(0);

  const handleDotChange = index => {
    setDotindex(index);
  };

  const Dots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        {data.onboarding_screens.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                height: 10,
                width: index == dotIndex ? 30 : 10,
                backgroundColor:
                  index == dotIndex
                    ? colors.greenPrimary
                    : colors.greenSecondary,
                borderRadius: 5,
                marginHorizontal: 5,
              }}></View>
          );
        })}
      </View>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          top: 20,
          left: 0,
          right: 0,
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
    );
  };

  const Footer = () => {
    return (
      <View>
        <Dots></Dots>
        {dotIndex < data.onboarding_screens.length - 1 ? (
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.replace('Register')}
              style={{
                backgroundColor: colors.whitePrimary,
                paddingVertical: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: colors.border,
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDotindex(dotIndex + 1)
                flatListRef?.current?.scrollToIndex({
                  index: dotIndex + 1,
                  animated: true,
                })
              }
              }
              style={{
                backgroundColor: colors.greenPrimary,
                paddingVertical: 10,
                borderRadius: 5,
                width: '40%',
              }}>
              <Text
                style={{
                  color: colors.whitePrimary,
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.replace('Register')}
              style={{
                backgroundColor: colors.greenPrimary,
                paddingVertical: 10,
                borderRadius: 5,
                width: '100%',
              }}>
              <Text
                style={{
                  color: colors.whitePrimary,
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.whitePrimary,
        }}>
        <Header></Header>
        <FlatList
          ref={flatListRef}
          initialScrollIndex={0}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          data={data.onboarding_screens}
          
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            handleDotChange(index);
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, width: width}}>
                <ImageBackground
                  resizeMode='cover'
                  source={item.backgroundImage}
                  tintColor={colors.greenPrimary}
                  style={{
                    flex: 3,
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: index == 1 ? height * 0.80 : '105%',
                    marginTop: -60,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      marginBottom: -40,
                      width: width * 0.5,
                    }}
                    source={item.bannerImage}></Image>
                </ImageBackground>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 20,
                      color: colors.blackPrimary,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 14,
                      color: colors.border,
                      textAlign: 'center',
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}></FlatList>
        <Footer></Footer>
      </View>
    </>
  );
};

export default OnBoarding;
