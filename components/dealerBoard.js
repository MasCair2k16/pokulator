import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DealerBoard = ({ children, dealer }) => (
  <View style={dealer ? styles.border : styles.noBorder}>{children}</View>
);

export default DealerBoard;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    backgroundColor: '#4F5D2F',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    padding: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  noBorder: {
    flex: 1,
    backgroundColor: '#4F5D2F',
    borderColor: '#4F5D2F',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 15,
    padding: 50,
    paddingLeft: 45,
    paddingRight: 45,
  }
});
