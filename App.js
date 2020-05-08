import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

useScreens();

const fetchfonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading 
              startAsync={fetchfonts} 
              onFinish={() =>  setFontLoaded(true)}
           />
  }

  return <MealsNavigator />;
}