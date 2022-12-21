import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import codePush from "react-native-code-push";
import { Routes } from './src/routes'

// import { Container } from './styles';

function testecodepush () {

  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }, [])

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(testecodepush);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})