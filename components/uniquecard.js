import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * UniqueCard
 * @param {String} title The label of the card
 * @param {array} userHand User hand of the game
 * @param {array} dealerHand Dealer hand of the game
 * @returns
 */
const UniqueCard = ({ title }) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{`${title === '' ? '  +  ' : title}`}</Text>
    </View>
  );
};

export default UniqueCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
});
