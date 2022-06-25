import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Cards = ({ children }) => (
  <View style={styles.cardDirection}>{children}</View>
);

export default Cards;

const styles = StyleSheet.create({
  cardDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
