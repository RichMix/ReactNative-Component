import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function myFunction() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Little Lemon
        <Text style={headerStyles.innerText}> Cafe</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
