import React from 'react';
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CustomDrawer from './navigation/CustomDrawer';

import store from './redux/store';
import {Provider} from 'react-redux';
import {
  Home,
  About,
  Order,
  Transaction,
  Read,
  Chat,
  Splash,
  OnBoarding,
  Register,
  Login,
  Otp,
  ResetPassword,
  FoodDetail,
  MyChart,
  MyCard,
  AddCard,
  Checkout,
  Done,
  Maps,
  DeliveryStatus
} from './screens';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
    <StatusBar backgroundColor='transparent' translucent></StatusBar>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainLayout" component={CustomDrawer} />
          <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Otp" component={Otp}></Stack.Screen>
          <Stack.Screen name="FoodDetail" component={FoodDetail}></Stack.Screen>
          <Stack.Screen name="MyChart" component={MyChart}></Stack.Screen>
          <Stack.Screen name="MyCard" component={MyCard}></Stack.Screen>
          <Stack.Screen name="AddCard" component={AddCard}></Stack.Screen>
          <Stack.Screen name="Checkout" component={Checkout}></Stack.Screen>
          <Stack.Screen name="Done" component={Done}></Stack.Screen>
          <Stack.Screen name="Maps" component={Maps}></Stack.Screen>
          <Stack.Screen name="DeliveryStatus" component={DeliveryStatus}></Stack.Screen>
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
};

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// const MainApp = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: 'lightblue',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen
//         name="Order"
//         component={Order}
//         options={{headerShown: false, tabBarBadge: 3}}
//       />
//       <Tab.Screen
//         name="Transaction"
//         component={Transaction}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// const App = () => {
//   return (

//     <NavigationContainer>
//       <TopTab.Navigator>
//       <TopTab.Screen name="Home" component={Home} />
//       <TopTab.Screen name="About" component={About} />
//     </TopTab.Navigator>

//     </NavigationContainer>
//   );
// };

export default App;
