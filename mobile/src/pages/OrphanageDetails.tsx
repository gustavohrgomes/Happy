import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello There</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0089a5'
  },
  text: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})