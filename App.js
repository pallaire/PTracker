/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


 /*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One Test</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/


import React, { Component } from 'react';
import { SafeAreaView, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends Component {

  state = {
    enable : true,
    history : [ {date:"Sun Feb 23 2020 10:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 23 2020 07:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 23 2020 04:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 23 2020 01:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 22 2020 22:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 22 2020 19:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 22 2020 16:16:41 GMT-0800 (Pacific Standard Time)"}, 
                {date:"Sun Feb 22 2020 13:16:41 GMT-0800 (Pacific Standard Time)"}, 
              ]
  }

	render() {
		return (
      <SafeAreaView style={styles.containerSafeArea}>
        {/* <View style={styles.containerTopFixed}>
          <Text style={styles.instructions}>Hello World!</Text>
        </View>
        <ScrollView style={styles.containerBottomScrolling}>
          <View style={styles.container}>
            <Text style={styles.instructions}>Hello World!</Text>
          </View>
        </ScrollView> */}
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	containerSafeArea: {
		flex: 1,
		backgroundColor: 'yellow'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
  },
  containerTopFixed: {
    flex: 1,
    backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
  },
  containerBottomScrolling: {
    flex: 6,
    backgroundColor: 'red'
  }
  
});