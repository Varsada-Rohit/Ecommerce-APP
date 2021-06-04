import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../Screens/Profile';
import MyOrders from '../Screens/MyOrders';

export type ProfileStackParamsList = {
  Profile: undefined;
  MyOrders: undefined;
};

const Stack = createStackNavigator<ProfileStackParamsList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
