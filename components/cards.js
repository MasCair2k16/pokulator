import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  SafeAreaView,
} from 'react-native';

import DealerBoard from '../components/dealerBoard';
import UniqueCard from '../components/uniquecard';

/**
 * UniqueCard
 * @param {String} title The label of the card
 * @param {array} userHand User hand of the game
 * @param {array} dealerHand Dealer hand of the game
 * @returns
 */
const Cards = ({ userHand, dealerHand }) => {
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
              {/* <Text style={styles.modalText}>{title}</Text>
              {dealerHand && <Text style={styles.modalText}>DealerHand</Text>}
              {userHand && <Text style={styles.modalText}>Userhand</Text>} */}
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
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
    // shadowOffset: { height: 7 },
    // shadowOpacity: 0.6,
    // shadowRadius: 6,
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
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
  },
});
