import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router';
import { fonts } from './utils';

const App = () => {
  return (
    <NavigationContainer>
    	<Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20
  }
})
