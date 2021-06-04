import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import {View} from 'react-native';

export type AuthStackParamsList = {
  Signup: undefined;
  Signin: undefined;
};

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStackNavigator: React.FC = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
        cardOverlay: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
            }}
          />
        ),
      }}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Signin" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
