import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Screeen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Transaction;
