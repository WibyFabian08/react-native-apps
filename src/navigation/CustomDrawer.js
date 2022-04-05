import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {colors} from '../constants';
import {Home, About, Order} from '../screens';
import {Salah} from '../assets/images';
import {
  CloseIcon,
  HomeIcon,
  ProfileIcon,
  OrderIcon,
  LogoutIcon,
  LoveIcon,
  NotificationIcon,
  SettingIcon,
  MapsIcon,
} from '../assets';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {selectTab} from '../redux/action/drawerAction';

const Drawer = createDrawerNavigator();

const CustomDrawerItems = ({label, icon, onPress, isFocus}) => {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 40,
        backgroundColor: isFocus ? colors.greenSecondary : null,
        paddingHorizontal: 8,
        borderRadius: 10,
      }}
      onPress={onPress}>
      <Image source={icon} style={{width: 20, height: 20}}></Image>
      <Text
        style={{
          color: colors.whitePrimary,
          fontSize: 18,
          // fontWeight: 'bold',
          marginLeft: 10,
          fontFamily: 'Poppins-SemiBold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = props => {
  const {selectedTab} = useSelector(state => state.drawerReducer);
  const dispatch = useDispatch();

  const handleChangeTab = tab => {
    if(tab === 'Logout') {
      props.navigation.replace('Login')
    } else {
      dispatch(selectTab(tab, props.navigation));
    }
  };

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      style={{padding: 20}}>
      <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={() => props.navigation.closeDrawer()}>
        <Image source={CloseIcon}></Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Image
            source={Salah}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              marginRight: 10,
            }}></Image>
          <View>
            <Text
              style={{
                color: colors.whitePrimary,
                fontSize: 18,
                // fontWeight: 'bold',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Muhammad Salah
            </Text>
            <Text
              style={{
                color: colors.whitePrimary,
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              View Detail Profile
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <CustomDrawerItems
          icon={HomeIcon}
          label="Home"
          onPress={() => handleChangeTab('Home')}
          isFocus={selectedTab === 'Home' ? true : false}></CustomDrawerItems>
        <CustomDrawerItems
          icon={ProfileIcon}
          label="Profile"
          onPress={() => handleChangeTab('About')}
          isFocus={selectedTab === 'About' ? true : false}></CustomDrawerItems>
        <CustomDrawerItems
          icon={OrderIcon}
          label="Order"
          onPress={() => handleChangeTab('Order')}
          isFocus={selectedTab === 'Order' ? true : false}></CustomDrawerItems>
        <CustomDrawerItems
          icon={LoveIcon}
          label="Favourite"
          onPress={() => handleChangeTab('Favourite')}
          isFocus={
            selectedTab === 'Favourite' ? true : false
          }></CustomDrawerItems>
        <View
          style={{
            height: 1,
            backgroundColor: colors.whitePrimary,
            marginVertical: 20,
          }}></View>
        <CustomDrawerItems
          icon={MapsIcon}
          label="Track Your Order"
          onPress={() => handleChangeTab('Track Your Order')}
          isFocus={
            selectedTab === 'Track Your Order' ? true : false
          }></CustomDrawerItems>
        <CustomDrawerItems
          icon={SettingIcon}
          label="Settings"
          onPress={() => handleChangeTab('Settings')}
          isFocus={
            selectedTab === 'Settings' ? true : false
          }></CustomDrawerItems>
        <CustomDrawerItems
          icon={NotificationIcon}
          label="Notification"
          onPress={() => handleChangeTab('Notification')}
          isFocus={
            selectedTab === 'Notification' ? true : false
          }></CustomDrawerItems>
      </View>

      <View style={{marginTop: 80}}>
        <CustomDrawerItems
          icon={LogoutIcon}
          label="Logout"
          onPress={() => handleChangeTab('Login')}
          isFocus={selectedTab === 'Logout' ? true : false}></CustomDrawerItems>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: colors.greenPrimary,
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}></CustomDrawerContent>
          );
        }}>
        <Drawer.Screen name="Home">
          {props => <Home {...props}></Home>}
        </Drawer.Screen>
        <Drawer.Screen name="About">
          {props => <About {...props}></About>}
        </Drawer.Screen>
        <Drawer.Screen name="Order">
          {props => <Order {...props}></Order>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
