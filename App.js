/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image,TouchableOpacity } from 'react-native';

import Hymnlist from './src/components/list';

function App () {
 
  return (
    <SafeAreaView style={styles.safearea}>
      <Hymnlist />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea:{
    backgroudColor:'#fff',
    flex:1
  },
});

export default App;
