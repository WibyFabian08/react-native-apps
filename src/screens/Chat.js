import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Screeen</Text>
      <Button style={styles.button} title="About" onPress={() => navigation.navigate('About')}></Button>
      <View style={{marginTop: 10}}></View>
      <Button style={styles.button} title="Order" onPress={() => navigation.navigate('MainApp')}></Button>
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
  button: {
      marginTop: 5,
      paddingRight: 5,
      paddingLeft: 5,
      borderRadius: 10
  }
});

export default Chat;
