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
  useColorScheme,
  View,
} from 'react-native';

import AppBar from './components/appbar';
import DealerBoard from './components/dealerBoard';
import UniqueCards from './components/uniquecards';
import Cards from './components/cards';

import { Colors, DebugInstructions } from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCenter}>{children}</View>
    </View>
  );
};

const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <StatusBar barStyle={'dark-content'} />
      <AppBar title="Your calculator" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundColor}
      >
        <View style={[styles.backgroundColor]}>
          <View>
            <Section title="Dealer Hand">
              <DealerBoard dealer={true}>
                <Text>Cards</Text>
              </DealerBoard>
            </Section>
          </View>
          <Section title="Your cards">
            <DealerBoard>
              <Text>Your Cards</Text>
            </DealerBoard>
          </Section>
          <Section title="Your chances">
            <DebugInstructions />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
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
