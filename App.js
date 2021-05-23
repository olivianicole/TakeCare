import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take Care</Text>
      <Text style={styles.subtitleText}>Take care of yourself by first taking care of your tasks.</Text>
      <StatusBar style="auto" />
      <Button  
      title='Log In'
      type='outline'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3f3',
    justifyContent: 'flex-start',
    fontFamily: 'San Francisco',
    paddingTop: 100,
  },
  titleText: {
    color: '#da7f8f',
    fontSize: 50,
    marginLeft: 30,
  },
  subtitleText: {
    color: '#a7bbc7',
    fontSize: 25,
    marginTop: 20,
    marginLeft: 40,
  }
});
