import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TexasHoldem } from '../node_modules/poker-odds-calc/dist/index.js';
const winPercentage = 64;

const Results = ({ userHand, dealerHand }) => {
  // const Table = new TexasHoldem();
  // // try {
  //   Table.addPlayer(['5h', '5d']);
  //   Table.addPlayer(['9h', '3h']);
  //   Table.setBoard(dealerHand);
  // // } catch (error) {
  // //   console.log(error)
  // // }

  // let results = Table.calculate();
  // results.getPlayers().forEach(player => {
  //   console.log(`${player.getName()} - ${player.getHand()} - Wins: ${player.getWinsPercentageString()} - Ties: ${player.getTiesPercentageString()}`);
  // });
  // console.log(results);
  let results = null;
  const parseresults = () => {
    if (results === null) {
      ('results');
    }
  };

  // useEffect(() => {}, [results]);
  return (
    <>
      <View style={styles.firstRow}>
        <View style={styles.color}>
          <Text>Best Play</Text>
          {/* <Text>{parseresults}</Text> */}
        </View>
        <View style={styles.percentage}>
          <Text style={styles.win}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
      </View>
      <View style={styles.secondRow}>
        <Text>Other plays</Text>
      </View>
    </>
  );
};

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
