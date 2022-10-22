import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CardCovers from '../assests/cardList/cardList';

/**
 * UniqueCard
 * @param {String} title The label of the card
 * @param {array} userHand User hand of the game
 * @param {array} dealerHand Dealer hand of the game
 * @returns
 */
const UniqueCard = ({ title, onlyNumbers = false, isUsed = false }) => {
  const image = CardCovers.find(obj => obj.name === title);
  return (
    <>
      {/* Prints Plus sign */}
      {title === '+' && !onlyNumbers && (
        <View style={styles.emptyCard}>
          <Text>&#43;</Text>
        </View>
      )}
      {/* Prints cardFaces */}
      {title !== '+' && !onlyNumbers && (
        <View style={styles.cardContainer}>
          <Image key={title} style={styles.cardFace} source={image.src} />
        </View>
      )}
      {/* Prints only numbers */}
      {title !== '' && onlyNumbers && !isUsed && (
        <View style={styles.emptyCard}>
          <Text style={styles.cardFont}>{title === 'T' ? 10 : title}</Text>
        </View>
      )}
      {/* Prints usedCards - grey-out */}
      {title !== '' && onlyNumbers && isUsed && (
        <View style={styles.usedCard}>
          <Text style={styles.cardFont}>{title === 'T' ? 10 : title}</Text>
        </View>
      )}
      {/* Hide cards with no title or number */}
      {title === '' && <View style={styles.DontShowCard} />}
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
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 2,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  usedCard: {
    backgroundColor: '#bababa',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 2,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  cardContainer: {
    backgroundColor: 'white',
    width: 60,
    height: 87,
    paddingRight: 1,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  cardFace: {
    width: 60,
    height: 87,
    borderRadius: 1,
  },
  DontShowCard: {
    width: 65,
  },
  cardFont: {
    fontSize: 17,
    fontWeight: '500',
  },
});
