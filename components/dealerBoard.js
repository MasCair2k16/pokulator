import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DealerBoard = ({ children, dealer }) => (
  <View style={dealer ? styles.border : styles.noBorder}>{children}</View>
);

export default DealerBoard;

const styles = StyleSheet.create({
  border: {
    backgroundColor: '#4F5D2F',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 5,
    padding: 15,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  noBorder: {
    // flex: 1,
    backgroundColor: '#4F5D2F',
    borderColor: '#4F5D2F',
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
