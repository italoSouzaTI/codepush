import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import codePush from "react-native-code-push";

// import { Container } from './styles';

function testecodepush () {

  useEffect(() => {
    codePush.sync({

      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Text>codepush-atualizado</Text>
      <Text>123</Text>
    </View>
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