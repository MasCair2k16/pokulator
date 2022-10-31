import React, { useState } from 'react';
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

const ModalLayout = (Hand, updateHand, usedCards) => {
  const suites = [
    { suite: 'spades', abv: 's' },
    { suite: 'diamonds', abv: 'd' },
    { suite: 'clubs', abv: 'c' },
    { suite: 'hearts', abv: 'h' },
  ];
  // eslint-disable-next-line prettier/prettier
  const numbers26 = ['2', '3', '4', '5', '6'];
  const numbers7J = ['7', '8', '9', 'T', 'J'];
  const numbersQA = ['Q', '', 'K', '', 'A'];

  //EX: cardPicked, suite, number
  const [selectedCard, setSelectedCard] = useState([]);

  /**
   * handChange Card makes a clone of current Hand, add value by index, update new clone to state
   */
  const handleChangeCard = () => {
    const userCards = [...Hand];
    userCards[selectedCard[0]] = `${selectedCard[2]}${selectedCard[1]}`;
    updateHand(userCards);
    setSelectedCard([]);
  };

  /**
   * HandleUsedCard checks if a card has been used already
   */
  const handleUsedCard = (number, suite) => {
    let isUsed = usedCards.includes(`${number}${suite}`);
    return isUsed;
  };

  return (
    <>
      <Text>Choose a Card</Text>
      <DealerBoard modal={true}>
        {Hand.map((type, i) => {
          return (
            <Pressable onPress={() => setSelectedCard(`${i}`)}>
              <UniqueCard title={Hand[i]} key={type} />
            </Pressable>
          );
        })}
      </DealerBoard>
      {selectedCard[0] && !selectedCard[1] && (
        <>
          <Text>Choose a Suit</Text>
          <DealerBoard modal={true} isWrap={false}>
            {suites.map((card, i) => {
              return (
                <Pressable
                  key={i}
                  disabled={selectedCard[1]}
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, card.abv])
                  }
                >
                  <UniqueCard title={card.suite} key={card.abv} />
                </Pressable>
              );
            })}
          </DealerBoard>
        </>
      )}
      {selectedCard[1] && (
        <>
          <Text>Pick a Number</Text>
          <DealerBoard modal={true} isWrap={true}>
            {numbers26.map((number, i) => {
              return (
                <Pressable
                  key={i}
                  disabled={handleUsedCard(number, selectedCard[1])}
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, number])
                  }
                >
                  <UniqueCard
                    title={number}
                    key={i}
                    onlyNumbers={true}
                    isUsed={handleUsedCard(number, selectedCard[1])}
                  />
                </Pressable>
              );
            })}
            {numbers7J.map((number, i) => {
              return (
                <Pressable
                  key={i}
                  disabled={handleUsedCard(number, selectedCard[1])}
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, number])
                  }
                >
                  <View style={styles.newLine}>
                    <UniqueCard
                      title={number}
                      key={i}
                      onlyNumbers={true}
                      isUsed={handleUsedCard(number, selectedCard[1])}
                    />
                  </View>
                </Pressable>
              );
            })}
            {numbersQA.map((number, i) => {
              return (
                <Pressable
                  disabled={
                    number === '' || handleUsedCard(number, selectedCard[1])
                  }
                  onPress={() =>
                    setSelectedCard(cardArray => [...cardArray, number])
                  }
                >
                  <View style={styles.newLines}>
                    <UniqueCard
                      title={number}
                      key={i}
                      onlyNumbers={true}
                      isUsed={handleUsedCard(number, selectedCard[1])}
                    />
                  </View>
                </Pressable>
              );
            })}
          </DealerBoard>
        </>
      )}
      {selectedCard[2] && (
        <Pressable style={styles.addCard} onPress={handleChangeCard}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </Pressable>
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
const Cards = ({ userHand, dealerHand, updateHand, usedCards }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      {/* Modal screen */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView>
          <View>
            <View style={styles.modalView}>
              {/* Modal layout for hands */}
              {dealerHand && ModalLayout(dealerHand, updateHand, usedCards)}
              {userHand && ModalLayout(userHand, updateHand, usedCards)}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      {/* Show Dealer Hand in Modal Header */}
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
          {dealerHand.filter(x => x === '+').length < 3 && (
            <Pressable onPress={() => setModalVisible(true)}>
              <UniqueCard title={dealerHand[3]} dealerHand={dealerHand} />
            </Pressable>
          )}
          {dealerHand.filter(x => x === '+').length < 2 && (
            <Pressable onPress={() => setModalVisible(true)}>
              <UniqueCard title={dealerHand[4]} dealerHand={dealerHand} />
            </Pressable>
          )}
        </DealerBoard>
      )}
      {/* Show User Hand in Modal Header */}
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
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },
  addCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  addCardButtonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  newLine: {
    top: 5,
  },
  newLines: {
    top: 10,
  },
  centeredView: {
    padding: 0,
  },
});
