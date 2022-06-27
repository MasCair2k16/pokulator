/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
  let dealerHand = ['As', '+', '+', '+', '+'];
  let userHand = ['Ks', '+'];

  const changeHand = (index, type = '') => {
    dealerHand[index] = type;
  };

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
            <Section title="Dealer Hand">
              <Cards dealerHand={dealerHand} changeHand={changeHand} />
            </Section>
          </View>
          <View>
            <Section title="Your cards">
              <Cards userHand={userHand} changeHand={changeHand} />
            </Section>
          </View>
          <Section title="Your chances">
            <Results data={null} />
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
