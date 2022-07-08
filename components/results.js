import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TexasHoldem } from '../node_modules/poker-odds-calc/dist/index.js';
const winPercentage = 64;

const Results = ({ userHand, dealerHand }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const Table = new TexasHoldem();
  Table.limit(100);
  try {
    Table.addPlayer(['2d', '3d']); // make userHand
    Table.addPlayer(['Ad', 'Ah']); // Change so cards aren't replicated
    Table.setBoard(dealerHand);
  } catch (error) {
    console.log(error);
  }

  let results = Table.calculate();
  let ranks = results.getPlayers()[0].getRanks();
  let object = Object.entries(ranks.FLUSH.player.data.ranks);
  console.log(object);

  return (
    <>
      {object.map((hand, i) => {
        return (
          <View style={styles.firstRow}>
            <View style={styles.percentage}>
              <Text style={styles.winString}>Win Percentage</Text>
              <Text
                style={
                  winPercentage > 60
                    ? styles.winPercentage
                    : styles.winPercentage
                }
              >
                {hand[1] / 100}%
              </Text>
            </View>
            <View>
              <Text style={styles.winHandString}>Hand</Text>
              <Text style={styles.winHand}>
                {capitalizeFirstLetter(
                  hand[0].replaceAll('_', ' ').toLowerCase(),
                )}
              </Text>
            </View>
          </View>
        );
      })}
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
