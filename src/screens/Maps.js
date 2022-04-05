import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  BackHandler,
  Alert
} from 'react-native';
import {FocusIcon, ClockIcon, CallIcon, Salah} from '../assets';
import {colors} from '../constants';
import MapView, {Marker} from 'react-native-maps';

const Maps = ({navigation}) => {
  const [coord, setCoord] = useState({
    latitude: -7.227906,
    longitude: 107.908699,
  });

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => navigation.replace('DeliveryStatus')},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.whitePrimary,
        }}>
        <MapView
          style={styles.map}
          onRegionChange={e => {
            setCoord({
              ...coord,
              latitude: e.latitude,
              longitude: e.longitude,
            });
          }}
          initialRegion={{
            latitude: -7.227906,
            longitude: 107.908699,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={coord}
            title={'Your Location'}
            description={'Lokasi anda saat ini berada di Garut'}
            draggable></Marker>
        </MapView>
      </View>
      <View
        style={{
          backgroundColor: colors.whitePrimary,
          padding: 20,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: -40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={ClockIcon}
            style={{
              width: 40,
              height: 40,
              tintColor: colors.blackPrimary,
            }}></Image>
          <View style={{marginLeft: 20}}>
            <Text style={{color: colors.border, fontFamily: 'Poppins-Regular'}}>
              Your Delivery Time
            </Text>
            <Text
              style={{
                color: colors.blackPrimary,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                marginTop: -3,
              }}>
              20 minutes
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={FocusIcon}
            style={{
              width: 40,
              height: 40,
              tintColor: colors.blackPrimary,
            }}></Image>
          <View style={{marginLeft: 20}}>
            <Text style={{color: colors.border, fontFamily: 'Poppins-Regular'}}>
              Your Address
            </Text>
            <Text
              style={{
                color: colors.blackPrimary,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                marginTop: -3,
              }}>
              Jl. Simpang Kab. Garut
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.greenPrimary,
              paddingVertical: 15,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Image
              source={Salah}
              style={{
                width: 40,
                height: 40,
                borderRadius: 5,
                marginRight: 10,
              }}></Image>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: colors.whitePrimary,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Roberto Firmino
              </Text>
              <Text
                style={{
                  color: colors.whitePrimary,
                  fontFamily: 'Poppins-Regular',
                }}>
                Delivery Man
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 1.5,
                borderColor: colors.whitePrimary,
                borderRadius: 5,
                backgroundColor: colors.greenSecondary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={CallIcon}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: colors.whitePrimary,
                }}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;
