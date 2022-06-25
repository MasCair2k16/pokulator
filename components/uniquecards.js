import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UniqueCards = ({ title }) => (
  <View style={styles.color}>
      {title}
  </View>
);

export default UniqueCards;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  color: {
    backgroundColor: 'white',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    paddingHorizontal: 24,
    fontWeight: '600',
  },
});
