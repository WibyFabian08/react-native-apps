import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  HomeIcon,
  OrderIcon,
  LoveIcon,
  NotificationIcon,
  SearchIcon,
} from '../assets';

import {colors} from '../constants';
import {selectTab} from '../redux/action/drawerAction';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const BottomTab = ({navigation}) => {
  const dispatch = useDispatch();
  const {selectedTab} = useSelector(state => state.drawerReducer);

  const handlePress = tab => {
    dispatch(selectTab(tab, navigation));
  };

  const homeWidth = useSharedValue('20%');
  const homeColor = useSharedValue(colors.whitePrimary);

  const aboutWidth = useSharedValue('20%');
  const aboutColor = useSharedValue(colors.whitePrimary);

  const orderWidth = useSharedValue('20%');
  const orderColor = useSharedValue(colors.whitePrimary);

  const loveWidth = useSharedValue('20%');
  const loveColor = useSharedValue(colors.whitePrimary);

  const notifWidth = useSharedValue('20%');
  const notifColor = useSharedValue(colors.whitePrimary);

  const homeWidthStyle = useAnimatedStyle(() => {
    return {
      width: homeWidth.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeColor.value,
    };
  });

  const aboutWidthStyle = useAnimatedStyle(() => {
    return {
      width: aboutWidth.value,
    };
  });

  const aboutColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: aboutColor.value,
    };
  });

  const orderWidthStyle = useAnimatedStyle(() => {
    return {
      width: orderWidth.value,
    };
  });

  const orderColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: orderColor.value,
    };
  });

  const loveWidthStyle = useAnimatedStyle(() => {
    return {
      width: loveWidth.value,
    };
  });

  const loveColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: loveColor.value,
    };
  });

  const notifWidthStyle = useAnimatedStyle(() => {
    return {
      width: notifWidth.value,
    };
  });

  const notifColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notifColor.value,
    };
  });

  useEffect(() => {
    if (selectedTab === 'Home') {
      homeWidth.value = withTiming('80%', {duration: 500});
      homeColor.value = withTiming(colors.greenPrimary, {duration: 500});
    } else {
      homeWidth.value = withTiming('20%', {duration: 500});
      homeColor.value = withTiming(colors.whitePrimary, {duration: 500});
    }

    if (selectedTab === 'About') {
      aboutWidth.value = withTiming('80%', {duration: 500});
      aboutColor.value = withTiming(colors.greenPrimary, {duration: 500});
    } else {
      aboutWidth.value = withTiming('20%', {duration: 500});
      aboutColor.value = withTiming(colors.whitePrimary, {duration: 500});
    }

    if (selectedTab === 'Order') {
      orderWidth.value = withTiming('80%', {duration: 500});
      orderColor.value = withTiming(colors.greenPrimary, {duration: 500});
    } else {
      orderWidth.value = withTiming('20%', {duration: 500});
      orderColor.value = withTiming(colors.whitePrimary, {duration: 500});
    }

    if (selectedTab === 'MyChart') {
      loveWidth.value = withTiming('80%', {duration: 500});
      loveColor.value = withTiming(colors.greenPrimary, {duration: 500});
    } else {
      loveWidth.value = withTiming('20%', {duration: 500});
      loveColor.value = withTiming(colors.whitePrimary, {duration: 500});
    }

    if (selectedTab === 'Notification') {
      notifWidth.value = withTiming('80%', {duration: 500});
      notifColor.value = withTiming(colors.greenPrimary, {duration: 500});
    } else {
      notifWidth.value = withTiming('20%', {duration: 500});
      notifColor.value = withTiming(colors.whitePrimary, {duration: 500});
    }
  }, [selectedTab]);

  const CustomBottomTab = ({
    label,
    icon,
    isFocused,
    onPress,
    outerContainerStyle,
    innerContainerStyle,
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Animated.View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                justifyContent: 'center',
                borderRadius: 25,
              },
              innerContainerStyle,
              outerContainerStyle,
            ]}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: isFocused ? colors.whitePrimary : colors.blackPrimary,
              }}
              source={icon}></Image>
            <Text
              style={{
                marginLeft: 5,
                color: colors.whitePrimary,
                // fontWeight: '400',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16
              }}>
              {isFocused && label}
            </Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
        backgroundColor: colors.whitePrimary,
      }}>
      <CustomBottomTab
        label="Home"
        icon={HomeIcon}
        outerContainerStyle={homeWidthStyle}
        innerContainerStyle={homeColorStyle}
        onPress={() => handlePress('Home')}
        isFocused={selectedTab === 'Home' ? true : false}></CustomBottomTab>
      <CustomBottomTab
        label="About"
        icon={SearchIcon}
        outerContainerStyle={aboutWidthStyle}
        innerContainerStyle={aboutColorStyle}
        onPress={() => handlePress('About')}
        isFocused={selectedTab === 'About' ? true : false}></CustomBottomTab>
      <CustomBottomTab
        label="Order"
        icon={OrderIcon}
        outerContainerStyle={orderWidthStyle}
        innerContainerStyle={orderColorStyle}
        onPress={() => handlePress('Order')}
        isFocused={selectedTab === 'Order' ? true : false}></CustomBottomTab>
      <CustomBottomTab
        label="Fav"
        icon={LoveIcon}
        outerContainerStyle={loveWidthStyle}
        innerContainerStyle={loveColorStyle}
        onPress={() => handlePress('MyChart')}
        isFocused={
          selectedTab === 'MyChart' ? true : false
        }></CustomBottomTab>
      <CustomBottomTab
        label="Notif"
        icon={NotificationIcon}
        outerContainerStyle={notifWidthStyle}
        innerContainerStyle={notifColorStyle}
        onPress={() => handlePress('Notification')}
        isFocused={
          selectedTab === 'Notification' ? true : false
        }></CustomBottomTab>
    </View>
  );
};

export default BottomTab;
