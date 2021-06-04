import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';

export type AuthStackParamsList = {
  Home: undefined;
  //   Signin: undefined;
};

const Stack = createStackNavigator<AuthStackParamsList>();

const HomeStackNavigator: React.FC = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
