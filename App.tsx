import React, {useState} from 'react';
import {View, StyleSheet, Text, Appearance} from 'react-native';
import AppTextInput from './App/Components/AppTextInput';
import SignUp from './App/Screens/SignUp';
import Colors, {colort} from './App/Config/Colors';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import AuthStackNavigator from './App/Navigators/AuthStackNavigator';
import HomeStackNavigator from './App/Navigators/HomeStackNavigator';
import TabNavigator from './App/Navigators/TabNavigator';

interface Props {}

const App: React.FC<Props> = ({}) => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(
    Appearance.getColorScheme() === 'dark',
  );
  const customDarkTheme: colort = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...Colors.DarkThemeColor,
    },
  };

  const customLightTheme: colort = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      ...Colors.LightThemeColor,
    },
  };

  return (
    <NavigationContainer
      theme={isDarkMode ? customDarkTheme : customLightTheme}>
      {/* <AuthStackNavigator /> */}
      <TabNavigator />
      {/* <View
        style={{flex: 1, backgroundColor: Colors.DarkThemeColor.background}}>
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default App;
