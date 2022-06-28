import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const winPercentage = 64;
const parseresults = data => {
  if (data === null) {
    return 'results';
  }
};
const Results = ({ data = null }) => (
  <>
    <View style={styles.firstRow}>
      <View style={styles.color}>
        <Text>Best Play</Text>
        <Text>{parseresults(data)}</Text>
      </View>
      <View style={styles.percentage}>
        <Text style={styles.win}>Win Percentage</Text>
        <Text style={styles.winPercentage}>{winPercentage}%</Text>
      </View>
    </View>
    <View style={styles.secondRow}>
      <Text>Other plays</Text>
      <Text>{parseresults(data)}</Text>
    </View>
  </>
);

export default Results;

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'white',
    top: 24,
    borderRadius: 5,
    marginBottom: 12,
    height: 150,
  },
  firstRow: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
  secondRow: {
    backgroundColor: 'white',
    top: 24,
    borderRadius: 5,
    marginBottom: 12,
    width: '100%',
    height: 250,
  },
  percentage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 30,
  },
  winPercentage: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
