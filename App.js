/* Models */
import GameTeam from './objects/Team'

/* Components */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { VersusScore } from './components/VersusScore';
import { AppLoading } from 'expo-app-loading'

export default function App() {

  const home = new GameTeam('Tigers', '../assets/Logos/New_Richmond_Tigers.png');
  const away = new GameTeam('Raiders', 'null');
  
  let [fontsLoaded] = useFonts({
    'Gemunu': require('./assets/Fonts/GemunuLibre-Regular.ttf'),
    'GemunuLight': require('./assets/Fonts/GemunuLibre-Light.ttf'),
    'GemunuMedium': require('./assets/Fonts/GemunuLibre-Medium.ttf'),
    'GemunuBold': require('./assets/Fonts/GemunuLibre-Bold.ttf'),
  });

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.topBar}>
        <Image style={mainStyles.navIcon_small} source={require('./assets/Icons/Inactive/Settings_Icon.png')} />
        <Text style={mainStyles.Title}>BRC</Text>
        <Image style={mainStyles.navIcon_small} source={require('./assets/Icons/Inactive/Announcements_Icon.png')} />
      </View>
      <VersusScore homeTName={home} awayTName={away} />
    </View>
  );
}

const mainStyles = StyleSheet.create({
  defaultShadow: {
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowColor: 'black',
    elevation: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topBar: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navIcon_small: {
    width: 24,
    height: 24,
  },
  Title: {
    fontFamily: 'GemunuMedium',
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});
