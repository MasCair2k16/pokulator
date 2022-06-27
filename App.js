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
import DealerBoard from './components/dealerBoard';
import UniqueCard from './components/uniquecard';
import Results from './components/results';

const Section = ({ children, title }): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCenter}>{children}</View>
    </View>
  );
};

const App: () => Node = () => {
  let dealerHand = ['', '', '', '', ''];
  let userHand = ['Ks', ''];

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
              <DealerBoard dealer={true}>
                <UniqueCard title={dealerHand[0]} hand={dealerHand} />
                <UniqueCard title={dealerHand[1]} hand={dealerHand} />
                <UniqueCard title={dealerHand[2]} hand={dealerHand} />
                <UniqueCard title={dealerHand[3]} hand={dealerHand} />
                <UniqueCard title={dealerHand[4]} hand={dealerHand} />
              </DealerBoard>
            </Section>
          </View>
          <Section title="Your cards">
            <DealerBoard>
              <UniqueCard title={userHand[0]} hand={userHand} />
              <UniqueCard title={userHand[1]} hand={userHand} />
            </DealerBoard>
          </Section>
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
