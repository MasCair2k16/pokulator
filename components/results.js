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
    userHand.includes('+')
      ? Table.addPlayer(['2d', '9d'])
      : Table.addPlayer(userHand); // make userHand
    Table.addPlayer(['Ad', '6h']); // Change so cards aren't replicated
    Table.setBoard(dealerHand);
  } catch (error) {
    console.log(error);
  }

  let results = Table.calculate();
  let ranks = results.getPlayers()[0].getRanks();
  let object = Object.entries(ranks.FLUSH.player.data.ranks);
  console.log('Hello', userHand);
  // console.log(object);

  return (
    <>
      {userHand.includes('+') ? (
        <View style={styles.noCardsScreen}>
          <Text style={styles.noCardsText}>
            Uh oh, {'\n'}try filling your cards first{'\n'}to see your
            chances...
          </Text>
        </View>
      ) : (
        !userHand.includes('+') &&
        object.map((hand, i) => {
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
        })
      )}
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
  noCardsText: {
    color: 'white',
    FontWeight: 'bold',
    // fontWeight: '500',
    fontSize: 22,
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
  noCardsScreen: {
    marginTop: 70,
    marginLeft: 50,
    marginRight: 50,
    height: 240,
  },
});
