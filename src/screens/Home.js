import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {Header, BottomTab} from '../components';
import {SearchIcon, SliderIcon, StarIcon, CloseIcon} from '../assets';

import {colors} from '../constants';
import DummyData from '../../constants/dummyData';

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [menuList, setMenuList] = useState(DummyData.menu[0].name);
  const [categoryList, setCategoryList] = useState(
    DummyData.categories[0].name,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [timeDelivery, setTimeDelivery] = useState(10);
  const [rating, setRaring] = useState(1);
  const [tag, setTag] = useState(DummyData.menu[0].name);

  let dataMenu = [];

  const filterTop = useSharedValue(1000);

  const filterTopStyle = useAnimatedStyle(() => {
    return {
      top: filterTop.value,
    };
  });

  useEffect(() => {
    const find = DummyData.menu.find(data => {
      return data.name == menuList;
    });

    find.list.forEach(list => {
      dataMenu.push(list);
    });
  }, [menuList]);

  useEffect(() => {
    if (modalVisible) {
      filterTop.value = withTiming(100, {duration: 500});
    } else {
      filterTop.value = withTiming(1000, {duration: 500});
    }
  }, [modalVisible]);

  const ListFood = ({title, image, price, description}) => (
    <TouchableOpacity
      onPress={() => navigation.replace('FoodDetail')}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 140,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: colors.grayBg,
        marginVertical: 5,
        marginHorizontal: 20,
        flexShrink: 1
      }}>
      <Image
        style={{width: 100, height: 100, borderRadius: 100 / 2}}
        source={image}></Image>
      <View style={{marginLeft: 10}}>
        <Text
          style={{
            color: colors.blackPrimary,
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold',
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: colors.border,
            fontSize: 14,
            marginVertical: 3,
            fontFamily: 'Poppins-Regular',
          }}>
          {description}
        </Text>
        <Text
          style={{
            color: colors.blackPrimary,
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
          }}>
          ${price}
        </Text>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
          <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
          <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
          <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
          <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <ListFood
      title={item.name}
      price={item.price}
      rating={item.rating}
      image={item.image}
      description={item.description}
    />
  );

  const ListCategory = () => {
    return (
      <View style={{marginHorizontal: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DummyData.menu.map((data, index) => {
            return (
              <TouchableOpacity
                style={{
                  height: 30,
                  marginLeft: 20,
                  marginRight: index == DummyData.menu.length - 1 ? 20 : 10,
                }}
                key={index}
                onPress={() => setMenuList(data.name)}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-SemiBold',
                    color:
                      menuList === data.name
                        ? colors.greenPrimary
                        : colors.blackPrimary,
                  }}>
                  {data.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const ListPopular = () => {
    return (
      <View style={{marginVertical: 10}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {DummyData.listMenu.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.replace('FoodDetail')}
                style={{
                  paddingVertical: 5,
                  backgroundColor: colors.grayBg,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginRight: index == DummyData.listMenu.length - 1 ? 20 : 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={data.image}
                  style={{
                    height: 200,
                    width: 200,
                  }}></Image>
                <View
                  style={{
                    marginTop: -40,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      paddingTop: 7,
                      fontSize: 14,
                      color: colors.blackPrimary,
                      fontFamily: 'Poppins-SemiBold',
                      lineHeight: 25,
                    }}>
                    {data.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {data.description}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 10,
                      fontSize: 18,
                      color: colors.blackPrimary,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    ${data.price}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={StarIcon}></Image>
                    <Image
                      style={{width: 20, height: 20}}
                      source={StarIcon}></Image>
                    <Image
                      style={{width: 20, height: 20}}
                      source={StarIcon}></Image>
                    <Image
                      style={{width: 20, height: 20}}
                      source={StarIcon}></Image>
                    <Image
                      style={{width: 20, height: 20}}
                      source={StarIcon}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const ListCategoryFood = () => {
    return (
      <View style={{marginVertical: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DummyData.categories.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => setCategoryList(data.name)}
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingVertical: 5,
                  backgroundColor:
                    categoryList === data.name
                      ? colors.greenPrimary
                      : colors.grayBg,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginRight:
                    index == DummyData.categories.length - 1 ? 20 : 0,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-SemiBold',
                    color:
                      categoryList === data.name ? colors.whitePrimary : 'gray',
                    lineHeight: 20,
                  }}>
                  {data.name}
                </Text>
                <Image
                  source={data.icon}
                  style={{width: 30, height: 30}}></Image>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const Recomended = () => {
    return (
      <View style={{marginVertical: 5, marginHorizontal: 20}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 5,
          }}>
          <Text
            style={{
              color: colors.blackPrimary,
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Recomended
          </Text>
          <Text
            style={{
              color: colors.greenPrimary,
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Show All
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('FoodDetail')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 15,
            backgroundColor: colors.grayBg,
            marginVertical: 5,
          }}>
          <Image
            source={DummyData.listMenu[0].image}
            style={{width: 150, height: 150}}
          />
          <View style={{flexShrink: 1}}>
            <Text
              style={{
                color: colors.blackPrimary,
                fontSize: 20,
                marginVertical: 3,
                fontFamily: 'Poppins-SemiBold',
              }}>
              {DummyData.listMenu[0].name}
            </Text>
            <Text
              // ellipsizeMode="tail"
              // numberOfLines={1}
              style={{
                color: colors.border,
                fontSize: 16,
                marginVertical: 3,
                fontFamily: 'Poppins-Regular',
                // flex: 1,
                // flexShrink: 1
              }}>
              {DummyData.listMenu[0].description}
            </Text>
            <Text
              style={{
                color: colors.blackPrimary,
                fontSize: 16,
                marginVertical: 3,
                fontFamily: 'Poppins-SemiBold',
              }}>
              ${DummyData.listMenu[0].price}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 3,
              }}>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
              <Image style={{width: 20, height: 20}} source={StarIcon}></Image>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={{paddingTop: 20, backgroundColor: colors.whitePrimary}}>
        <Header navigation={navigation}></Header>
      </View>
      <View style={{backgroundColor: colors.whitePrimary, flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.grayBg,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            <Image
              style={{width: 25, height: 25, tintColor: colors.blackPrimary}}
              source={SearchIcon}></Image>
            <TextInput
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                marginHorizontal: 5,
                paddingHorizontal: 6,
                paddingVertical: 2,
                fontFamily: 'Poppins-Regular',
              }}
              placeholder="search food..."></TextInput>
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                style={{width: 25, height: 25, tintColor: colors.blackPrimary}}
                source={SliderIcon}></Image>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: colors.whitePrimary}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataMenu}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <View>
                <ListCategoryFood></ListCategoryFood>
                <ListPopular></ListPopular>
                <Recomended></Recomended>
                <ListCategory></ListCategory>
              </View>
            }
          />
        </View>
      </View>
      <BottomTab navigation={navigation}></BottomTab>

      {modalVisible && (
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'rgba(0,0,0,0.2)',
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}></View>
            </TouchableWithoutFeedback>

            <Animated.View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  // height: '100%',
                  // position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: colors.whitePrimary,
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                  paddingTop: 30,
                  paddingHorizontal: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  elevation: 4,
                  // height: '85%',
                },
                // filterTopStyle,
              ]}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.blackPrimary,
                      paddingBottom: 5,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    Filter Your Search
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => setModalVisible(false)}>
                  <Image
                    style={{
                      tintColor: colors.border,
                      width: 15,
                      height: 15,
                    }}
                    source={CloseIcon}></Image>
                </TouchableWithoutFeedback>
              </View>

              <View style={{flex: 1}}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{flex: 1}}>
                  <View style={{paddingHorizontal: 0, marginBottom: 40}}>
                    <Text
                      style={{
                        color: colors.blackPrimary,
                        fontSize: 16,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Distance
                    </Text>
                    <View style={{paddingHorizontal: 20}}>
                      <MultiSlider
                        sliderLength={width * 0.8}
                        postfix="km"
                        values={[3, 10]}
                        min={1}
                        max={20}
                        // onValuesChange={values => console.log(values)}
                        markerOffsetY={20}
                        selectedStyle={{
                          backgroundColor: colors.greenPrimary,
                        }}
                        trackStyle={{
                          height: 10,
                          borderRadius: 10,
                          backgroundColor: colors.grayBg,
                        }}
                        customMarker={e => {
                          return (
                            <View
                              style={{
                                height: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <View
                                style={{
                                  height: 30,
                                  width: 30,
                                  borderRadius: 15,
                                  borderWidth: 4,
                                  borderColor: colors.whitePrimary,
                                  backgroundColor: colors.greenPrimary,
                                  shadowColor: '#000000',
                                  shadowOffset: {
                                    width: 0,
                                    height: 3,
                                  },
                                  shadowRadius: 1,
                                  shadowOpacity: 0.1,
                                }}></View>
                              <Text
                                style={{
                                  marginTop: 5,
                                  color: colors.blackPrimary,
                                  fontSize: 16,
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                {e.currentValue} km
                              </Text>
                            </View>
                          );
                        }}></MultiSlider>
                    </View>
                  </View>

                  {/* delivery time */}
                  <View style={{paddingHorizontal: 0, marginBottom: 40}}>
                    <Text
                      style={{
                        color: colors.blackPrimary,
                        fontSize: 16,
                        marginBottom: 10,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Delivery Time
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => setTimeDelivery(10)}
                        style={{
                          backgroundColor:
                            timeDelivery == 10
                              ? colors.greenPrimary
                              : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            color:
                              timeDelivery == 10
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          10 Min
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setTimeDelivery(20)}
                        style={{
                          backgroundColor:
                            timeDelivery == 20
                              ? colors.greenPrimary
                              : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            color:
                              timeDelivery == 20
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          20 Min
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setTimeDelivery(30)}
                        style={{
                          backgroundColor:
                            timeDelivery == 30
                              ? colors.greenPrimary
                              : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            color:
                              timeDelivery == 30
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          30 Min
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* multi slider pricing */}
                  <View style={{paddingHorizontal: 0, marginBottom: 40}}>
                    <Text
                      style={{
                        color: colors.blackPrimary,
                        fontSize: 16,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Pricing Range
                    </Text>
                    <View style={{paddingHorizontal: 20}}>
                      <MultiSlider
                        sliderLength={width * 0.8}
                        // p="km"
                        values={[3, 100]}
                        min={1}
                        max={100}
                        // onValuesChange={values => console.log(values)}
                        markerOffsetY={20}
                        selectedStyle={{
                          backgroundColor: colors.greenPrimary,
                        }}
                        trackStyle={{
                          height: 10,
                          borderRadius: 10,
                          backgroundColor: colors.grayBg,
                        }}
                        customMarker={e => {
                          return (
                            <View
                              style={{
                                height: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <View
                                style={{
                                  height: 30,
                                  width: 30,
                                  borderRadius: 15,
                                  borderWidth: 4,
                                  borderColor: colors.whitePrimary,
                                  backgroundColor: colors.greenPrimary,
                                  shadowColor: '#000000',
                                  shadowOffset: {
                                    width: 0,
                                    height: 3,
                                  },
                                  shadowRadius: 1,
                                  shadowOpacity: 0.1,
                                }}></View>
                              <Text
                                style={{
                                  marginTop: 5,
                                  color: colors.blackPrimary,
                                  fontSize: 16,
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                $ {e.currentValue}.0
                              </Text>
                            </View>
                          );
                        }}></MultiSlider>
                    </View>
                  </View>

                  {/* rating */}
                  <View style={{paddingHorizontal: 0, marginBottom: 40}}>
                    <Text
                      style={{
                        color: colors.blackPrimary,
                        fontSize: 16,
                        fontWeight: '500',
                        marginBottom: 10,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rating
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => setRaring(1)}
                        style={{
                          backgroundColor:
                            rating == 1 ? colors.greenPrimary : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              rating == 1
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            marginRight: 3,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          1
                        </Text>
                        <Image
                          source={StarIcon}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor:
                              rating == 1 ? colors.whitePrimary : colors.border,
                          }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRaring(2)}
                        style={{
                          backgroundColor:
                            rating == 2 ? colors.greenPrimary : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              rating == 2
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            marginRight: 3,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          2
                        </Text>
                        <Image
                          source={StarIcon}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor:
                              rating == 2 ? colors.whitePrimary : colors.border,
                          }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRaring(3)}
                        style={{
                          backgroundColor:
                            rating == 3 ? colors.greenPrimary : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              rating == 3
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            marginRight: 3,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          3
                        </Text>
                        <Image
                          source={StarIcon}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor:
                              rating == 3 ? colors.whitePrimary : colors.border,
                          }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRaring(4)}
                        style={{
                          backgroundColor:
                            rating == 4 ? colors.greenPrimary : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              rating == 4
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            marginRight: 3,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          4
                        </Text>
                        <Image
                          source={StarIcon}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor:
                              rating == 4 ? colors.whitePrimary : colors.border,
                          }}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRaring(5)}
                        style={{
                          backgroundColor:
                            rating == 5 ? colors.greenPrimary : colors.grayBg,
                          borderRadius: 5,
                          marginHorizontal: 3,
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              rating == 5
                                ? colors.whitePrimary
                                : colors.blackSecondary,
                            textAlign: 'center',
                            fontSize: 18,
                            marginRight: 3,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          5
                        </Text>
                        <Image
                          source={StarIcon}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor:
                              rating == 5 ? colors.whitePrimary : colors.border,
                          }}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* tags */}
                  <View style={{paddingHorizontal: 0, marginBottom: 10}}>
                    <Text
                      style={{
                        color: colors.blackPrimary,
                        fontSize: 16,
                        marginBottom: 10,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Tags
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                      }}>
                      {DummyData.menu.map((data, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => setTag(data.name)}
                            style={{
                              backgroundColor:
                                tag == data.name
                                  ? colors.greenPrimary
                                  : colors.grayBg,
                              borderRadius: 5,
                              marginRight: 13,
                              paddingHorizontal: 5,
                              paddingVertical: 10,
                              justifyContent: 'center',
                              flexDirection: 'row',
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                color:
                                  tag == data.name
                                    ? colors.whitePrimary
                                    : colors.blackSecondary,
                                textAlign: 'center',
                                fontSize: 18,
                                marginRight: 3,
                                fontFamily: 'Poppins-Regular',
                              }}>
                              {data.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 20,
                }}>
                <TouchableOpacity
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
                    Apply Filter
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default Home;
