import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AppBar = ({ title }) => (
  <View style={styles.color}>
    <Text style={styles.heading}>{title}</Text>
  </View>
);

export default AppBar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  color: {
    backgroundColor: '#4F5D2F',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    paddingHorizontal: 24,
    fontWeight: '600',
  },
});
