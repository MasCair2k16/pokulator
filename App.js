/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';

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
 * TODO: make card numbers look good
 * TODO: percentage numbers are right
 * TODO: Make button on Modal
 * TODO: Show no percentage when no cards are selected
 */

import AppBar from './components/appbar';
import Results from './components/results';
import Cards from './components/cards';

const Section = ({ children, title }): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCenter}>{children}</View>
    </View>
  );
};

const App: () => Node = () => {
  const [dealerHand, setDealerHand] = useState(['+', '+', '+', '+', '+']);
  const [userHand, setUserHand] = useState(['+', '+']);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <StatusBar barStyle={'dark-content'} />
      <AppBar title="Your calculator" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollBehaviour}
      >
        <View style={[styles.backgroundColor]}>
          <View>
            <Section title="Dealer hand">
              <Cards dealerHand={dealerHand} updateHand={setDealerHand} />
              <Pressable
                onPress={() => setDealerHand(['+', '+', '+', '+', '+'])}
              >
                <Text style={styles.clearBoard}>Clear Board</Text>
              </Pressable>
            </Section>
          </View>
          <View>
            <Section title="Your cards">
              <Cards userHand={userHand} updateHand={setUserHand} />
              <Pressable
                onPress={() => {
                  return setUserHand(['+', '+']);
                }}
              >
                <Text style={styles.clearBoard}>Clear Board</Text>
              </Pressable>
            </Section>
          </View>
          <Section title="Your chances">
            <Results dealerHand={dealerHand} userHand={userHand} />
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
