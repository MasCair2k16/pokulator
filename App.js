/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

/**
 * TODO: Display percentages in right order - medium
 * TODO: get appicon - easy
 * TODO: App crashes unexpectedly when clickin on a cards - medium
 * TODO: Modify dealer cards in modal - easy
 * TODO: Fix the key in lists - easy
 * TODO: add spacing beneath the "Pick a numher" - easy - DONE
 */

import AppBar from './components/appbar';
import Results from './components/results';
import Cards from './components/cards';

const Section = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCenter}>{children}</View>
    </View>
  );
};

const App = () => {
  const [dealerHand, setDealerHand] = useState(['+', '+', '+', '+', '+']);
  const [userHand, setUserHand] = useState(['+', '+']);
  const [usedCards, setUsedCards] = useState([]);

  const [open, setOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState(2);
  const [items, setItems] = useState([
    { label: '2 Players', containerStyle: 'containerStyle', value: 2 },
    { label: '3 Players', containerStyle: 'containerStyle', value: 3 },
    { label: '4 Players', containerStyle: 'containerStyle', value: 4 },
    { label: '5 Players', containerStyle: 'containerStyle', value: 5 },
    { label: '6 Players', containerStyle: 'containerStyle', value: 6 },
    { label: '7 Players', containerStyle: 'containerStyle', value: 7 },
  ]);

  // Every Time user changes card, we update usedCards to limit cards being touched
  useEffect(() => {
    let usedCardsList = userHand.concat(dealerHand);
    return setUsedCards(usedCardsList);
  }, [userHand, dealerHand]);

  useEffect(() => {
    setDealerHand(['+', '+', '+', '+', '+']);
    setUserHand(['+', '+']);
  }, [playerCount]);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <StatusBar barStyle={'dark-content'} />
      <AppBar title="Your calculator" />
      <DropDownPicker
        open={open}
        value={playerCount}
        items={items}
        setOpen={setOpen}
        setValue={setPlayerCount}
        setItems={setItems}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          marginTop: 12,
          marginBottom: 12,
          marginHorizontal: 24,
          width: '88%',
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollBehaviour}
      >
        <View style={[styles.backgroundColor]}>
          <View>
            <Section title="Dealer hand">
              <Cards
                dealerHand={dealerHand}
                updateHand={setDealerHand}
                usedCards={usedCards}
              />
              <Pressable
                onPress={() => setDealerHand(['+', '+', '+', '+', '+'])}
              >
                <Text style={styles.clearBoard}>Clear Dealer</Text>
              </Pressable>
            </Section>
          </View>
          <View>
            <Section title="Your cards">
              <Cards
                userHand={userHand}
                updateHand={setUserHand}
                usedCards={usedCards}
              />
              <Pressable
                onPress={() => {
                  return setUserHand(['+', '+']);
                }}
              >
                <Text style={styles.clearBoard}>Clear Hand</Text>
              </Pressable>
            </Section>
          </View>
          <Section
            title={`Your chances vs \t\t\t  ${
              playerCount - 1 > 1
                ? `${playerCount - 1} players`
                : `\t${playerCount - 1} player`
            }`}
          >
            <Results
              dealerHand={dealerHand}
              userHand={userHand}
              playerCount={playerCount}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  scrollBehaviour: {
    backgroundColor: '#4F5D2F',
  },
  backgroundColor: {
    backgroundColor: '#4F5D2F',
  },
  clearBoard: {
    color: 'white',
    fontSize: 14,
    top: 5,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  sectionCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
