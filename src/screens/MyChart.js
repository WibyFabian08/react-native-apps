import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {DetailLayout} from '../components';
import {DeleteIcon} from '../assets';
import {colors} from '../constants';
import dummyData from '../../constants/dummyData';
import {SwipeListView} from 'react-native-swipe-list-view';

const MyChart = ({navigation}) => {
  const [dataCart, setDataCart] = useState(dummyData.myCart);

  const handleAdd = (data, newQty) => {
    const newData = dataCart.map(item => {
      return item.id == data.id && data.qty < 10
        ? {...item, qty: newQty}
        : item;
    });

    setDataCart(newData);
  };

  const handleMin = (data, newQty) => {
    const newData = dataCart.map(item => {
      return item.id == data.id && data.qty > 1 ? {...item, qty: newQty} : item;
    });

    setDataCart(newData);
  };

  const handleDelete = (data) => {
    const newData = dataCart.filter((item) => {
      return item.id !== data.id
    })
    setDataCart(newData)
  }

  const renderItem = data => (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.grayBg,
        marginVertical: 5,
        marginHorizontal: 20,
        position: 'relative',
        marginBottom: 10,
        height: 120,
      }}>
      <Image source={data.item.image} style={{width: 100, height: 100}} />
      <View style={{marginRight: 20, flex: 1}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            color: colors.blackPrimary,
          }}>
          {data.item.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: colors.greenPrimary,
          }}>
          ${data.item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: colors.whitePrimary,
          paddingHorizontal: 15,
          borderRadius: 10,
          height: 50,
        }}>
        <TouchableOpacity
          onPress={() => handleMin(data.item, data.item.qty - 1)}>
          <Text
            style={{
              color: colors.greenPrimary,
              fontSize: 40,
              marginTop: -5,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: colors.blackPrimary,
            fontSize: 20,
            fontFamily: 'Poppins-Semibold',
          }}>
          {data.item.qty}
        </Text>
        <TouchableOpacity
          onPress={() => handleAdd(data.item, data.item.qty + 1)}>
          <Text style={{color: colors.greenPrimary, fontSize: 30}}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data, rowMap) => (
    <TouchableOpacity
      onPress={() => handleDelete(data.item)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: colors.greenPrimary,
        marginVertical: 5,
        marginHorizontal: 20,
        position: 'relative',
        marginBottom: 10,
        height: 120,
      }}>
      <Image
        style={{
          tintColor: colors.whitePrimary,
          width: 30,
          height: 30,
          marginRight: 10,
        }}
        source={DeleteIcon}></Image>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 20,
          color: colors.whitePrimary,
        }}>
        Delete
      </Text>
    </TouchableOpacity>
  );

  return (
    <DetailLayout
      backAction={() => navigation.replace('MainLayout')}
      title="MY CART">
      <View style={{flex: 1}}>
        <SwipeListView
          data={dataCart}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          // onRowDidOpen={onItemOpen}
        />
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
            onPress={() => navigation.replace('Checkout')}
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

export default MyChart;
