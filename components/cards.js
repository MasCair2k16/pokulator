import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
  Button,
} from 'react-native';

import DealerBoard from '../components/dealerBoard';
import UniqueCard from '../components/uniquecard';

const ModalLayout = (Hand, updateHand) => {
  const suites = [
    { suite: 'spades', abv: 's' },
    { suite: 'diamonds', abv: 'd' },
    { suite: 'clubs', abv: 'c' },
    { suite: 'hearts', abv: 'h' },
  ];
  // eslint-disable-next-line prettier/prettier
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  //EX: cardPicked, suite, number
  const [selectedCard, setSelectedCard] = useState([]);

  /**
   * handChange Card makes a clone of current Hand, add value by index, update new clone to state
   */
  const handleChangeCard = () => {
    const userCards = [...Hand];
    userCards[selectedCard[0]] = `${selectedCard[2]}${selectedCard[1]}`;
    updateHand(userCards);
    console.log(selectedCard);
    setSelectedCard([]);
  };
  return (
    <>
      <DealerBoard modal={true}>
        {Hand.map((type, i) => {
          return (
            <Pressable onPress={() => setSelectedCard(`${i}`)}>
              <UniqueCard title={Hand[i]} key={type} />
            </Pressable>
          );
        })}
      </DealerBoard>
      {selectedCard[0] && (
        <>
          <Text>Choose a Suit</Text>
          <DealerBoard modal={true}>
            {suites.map(card => {
              return (
                <Pressable
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, card.abv])
                  }
                >
                  <UniqueCard title={require(`../image/PNG-cards-1.3/${card.suite}.png`)} key={card.abv} />
                </Pressable>
              );
            })}
          </DealerBoard>
        </>
      )}
      {selectedCard[1] && (
        <>
          <Text>Pick a Number</Text>
          <DealerBoard modal={true}>
            {numbers.map((number, i) => {
              return (
                <Pressable
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, number])
                  }
                >
                  <UniqueCard title={number} key={i} />
                </Pressable>
              );
            })}
          </DealerBoard>
        </>
      )}
      {selectedCard[2] && (
        <Button
          onPress={handleChangeCard}
          title="Add Card"
          color="#841584"
          accessibilityLabel="Add Card"
        />
      )}
    </>
  );
};

/**
 * UniqueCard
 * @param {String} title The label of the card
 * @param {array} userHand User hand of the game
 * @param {array} dealerHand Dealer hand of the game
 * @returns
 */
const Cards = ({ userHand, dealerHand, updateHand }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Choose a Card</Text>
              {dealerHand && ModalLayout(dealerHand, updateHand)}
              {userHand && ModalLayout(userHand, updateHand)}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      {dealerHand && (
        <DealerBoard dealer={true}>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={dealerHand[0]} dealerHand={dealerHand} />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={dealerHand[1]} dealerHand={dealerHand} />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={dealerHand[2]} dealerHand={dealerHand} />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={dealerHand[3]} dealerHand={dealerHand} />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={dealerHand[4]} dealerHand={dealerHand} />
          </Pressable>
        </DealerBoard>
      )}
      {userHand && (
        <DealerBoard>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={userHand[0]} />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <UniqueCard title={userHand[1]} />
          </Pressable>
        </DealerBoard>
      )}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 5,
    shadowColor: '#171717',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
});
