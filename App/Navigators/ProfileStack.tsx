import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../Screens/Profile';
import MyOrders from '../Screens/MyOrders';
import OrderDetails from '../Screens/OrderDetails';
import Settings from '../Screens/Settings';

export type ProfileStackParamsList = {
  Profile: undefined;
  MyOrders: undefined;
  OrderDetails: undefined;
  Settings: undefined;
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
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
