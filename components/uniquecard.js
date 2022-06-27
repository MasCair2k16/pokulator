import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal, Alert } from 'react-native';

const UniqueCard = ({ title, userHand = null, dealerHand = null }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.cardContainer}>
         <Pressable onPress={() => setModalVisible(true)}>
           <Text>{`${title === '' ? '  +  ' : title}`}</Text>
         </Pressable>
       </View>
    </View>
  );
};

// /**
//  * UniqueCard
//  * @param {String} title The label of the card
//  * @param {array} userHand User hand of the game
//  * @param {array} dealerHand Dealer hand of the game
//  * @returns
//  */
// const UniqueCard = ({ title, userHand = null, dealerHand = null }) => {
//   return (
//     <>
//       <View style={styles.cardContainer}>
//         <Pressable>
//           <Text>{`${title === '' ? '  +  ' : title}`}</Text>
//         </Pressable>
//       </View>
//     </>
//   );
// };

export default UniqueCard;

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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
