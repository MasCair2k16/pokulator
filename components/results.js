import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TexasHoldem } from '../node_modules/poker-odds-calc/dist/index.js';
import CardCovers from '../assests/cardList/cardList';
const winPercentage = 64;
const limit = 100;

/**
 * Print Results of users hand
 * @param {Array<Object>} userHand
 * @param {Array<Object>} dealerHand
 * @returns HTML list of the hand probablities
 */
const Results = ({ userHand, dealerHand, playerCount }) => {
  // Keep track of players Card
  let PlayersCard = [];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    PlayersCard = [];
  }, [playerCount, userHand, dealerHand]);

  var hasNumber = /\d/;

  // Track how many empty cards are in a hand
  const amountOfEmptyCard = dealerHand.filter(x => x === '+').length;

  // Capitalizes First Letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // random number
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Prettify the percentages
  function prettifyPercentage(percentage = '') {
    if (percentage.length === 2) {
      return percentage;
    } else if (percentage.charAt(1) === '0') {
      return percentage.slice(2);
    } else {
      return percentage.slice(2);
    }
  }

  // Add cards to players

  /**
   * Add cards to x players
   *  - To do this, grab random number from cardList Array
   *    - Make sure its not a suit name
   *    - Make sure other players aren't having same cards
   *    - Avoid greying out the cards on UI.
   *    - Avoid duplicate random Cards
   * if user doesn't pick cards yet, make a random hand too
   * Once user does pick cards, add them into hand.
   * Keep in mind ranks variable - player index 0
   */

  // if user picks a card, that a player already has, player must change card

  const Table = new TexasHoldem();
  Table.limit(limit);

  if (userHand.includes('+')) {
    Table.addPlayer(['Qs', 'Ks']);
    Table.addPlayer(['7d', '3s']);
  } else {
    Table.addPlayer(userHand);
    for (let index = 1; index < playerCount; index++) {
      let newPlayer = true;
      while (newPlayer) {
        let firstCard = CardCovers[getRandomInt(CardCovers.length)].name;
        let secondCard = CardCovers[getRandomInt(CardCovers.length)].name;
        if (
          hasNumber.test(firstCard) &&
          hasNumber.test(secondCard) &&
          userHand.indexOf(firstCard) === -1 &&
          userHand.indexOf(secondCard) === -1 &&
          PlayersCard.indexOf(firstCard) === -1 &&
          PlayersCard.indexOf(secondCard) === -1 &&
          secondCard !== firstCard
        ) {
          console.log(`Player ${index} - ${firstCard} ${secondCard}`);
          newPlayer = false;
          PlayersCard.push(firstCard);
          PlayersCard.push(secondCard);
          Table.addPlayer([firstCard, secondCard]);
        }
      }
    }
  }

  // rest of players

  // Table.addPlayer(['7d', '3s']);
  // Table.addPlayer(['8d', '4s']);

  if (amountOfEmptyCard === 2) {
    console.log('Flag 1', amountOfEmptyCard);
    Table.setBoard([
      `${dealerHand[0]}`,
      `${dealerHand[1]}`,
      `${dealerHand[2]}`,
    ]);
  } else if (amountOfEmptyCard === 1) {
    console.log('Flag 2', amountOfEmptyCard);
    Table.setBoard([
      `${dealerHand[0]}`,
      `${dealerHand[1]}`,
      `${dealerHand[2]}`,
      `${dealerHand[3]}`,
    ]);
  } else if (amountOfEmptyCard === 0) {
    console.log('Flag 3', amountOfEmptyCard);
    Table.setBoard([
      `${dealerHand[0]}`,
      `${dealerHand[1]}`,
      `${dealerHand[2]}`,
      `${dealerHand[3]}`,
      `${dealerHand[4]}`,
    ]);
  }

  // Grab user data from Poker API Calculator
  let results = Table.calculate();
  let ranks = results.getPlayers()[0].getRanks();
  let object = Object.entries(ranks.FLUSH.player.data.ranks);

  // Sort ranks by higher chances of winning
  const scoresHighToLow = object.sort((a, b) => b[1] - a[1]);

  return (
    <>
      {/*If user hand remains to have unused card, show this*/}
      {userHand.includes('+') ? (
        <View style={styles.noCardsScreen}>
          <Text style={styles.noCardsText}>
            Uh oh, {'\n'}try filling your cards first{'\n'}to see your
            chances...
          </Text>
        </View>
      ) : (
        !userHand.includes('+') &&
        scoresHighToLow.map((hand, i) => {
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
                  {prettifyPercentage(`${hand[1] / limit}%`)}
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
    height: 300,
  },
});
