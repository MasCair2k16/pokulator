import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text
            style={
              winPercentage > 60 ? styles.winPercentage : styles.winPercentage
            }
          >
            {winPercentage}%
          </Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Two Pair</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>High Card</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Three of a kind</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Straight</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Flush</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Full House</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Royal Flush</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Four of a Kind</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Straight Flush</Text>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.percentage}>
          <Text style={styles.winString}>Win Percentage</Text>
          <Text style={styles.winPercentage}>{winPercentage}%</Text>
        </View>
        <View>
          <Text style={styles.winHandString}>Hand</Text>
          <Text style={styles.winHand}>Royal Flush</Text>
        </View>
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
    height: 15,
    width: 150,
  },
  firstRow: {
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 7,
    padding: 10,
    borderRadius: 5,
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
    marginTop: 0,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  winString: {
    color: 'black',
    FontWeight: 'bold',
    fontWeight: '600',
    fontSize: 18,
  },
  winPercentage: {
    fontSize: 22,
    fontWeight: '300',
    color: 'black',
  },
  winHand: {
    fontSize: 22,
    fontWeight: '300',
    color: 'black',
    marginLeft: 10,
  },
  winHandString: {
    marginTop: 0,
    color: 'black',
    marginLeft: 0,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});
