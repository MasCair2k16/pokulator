import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

/**
 * UniqueCard
 * @param {String} title The label of the card
 * @param {array} userHand User hand of the game
 * @param {array} dealerHand Dealer hand of the game
 * @returns
 */
const UniqueCard = ({ title }) => {
  // const staticImage = require(`../image/PNG-cards-1.3/2C.png`)

  return (
    <>
      {title === '+' && (
        <View style={styles.emptyCard}>
          <Text>&#43;</Text>
        </View>
      )}
      {title !== '+' && (
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardFace}
            source={require('../image/PNG-cards-1.3/AC.png')}
          />
        </View>
      )}
    </>
  );
};

export default UniqueCard;

const styles = StyleSheet.create({
  emptyCard: {
    backgroundColor: 'white',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 36,
    paddingBottom: 37,
    borderRadius: 2,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  cardContainer: {
    backgroundColor: 'white',
    width: 60,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  cardFace: {
    width: 60,
    height: 90,
  },
});
