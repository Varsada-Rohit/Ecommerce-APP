import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../Components/Header';
import AddAddress from '../Screens/AddAddress';
import Address from '../Screens/Address';
import Bag from '../Screens/Bag';
import Checkout from '../Screens/Checkout';
import OrderSuccess from '../Screens/OrderSuccess';

export type BagStackParamsList = {
  Bag: undefined;
  AddAddress: undefined;
  Addresses: undefined;
  Checkout: undefined;
  OrderSuccess: undefined;
};

const Stack = createStackNavigator<BagStackParamsList>();

const BagStackNavigator: React.FC = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
        cardOverlay: () => (
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'transparent',
            }}
          />
        ),
      }}>
      <Stack.Screen name="Bag" component={Bag} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Addresses" component={Address} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
    </Stack.Navigator>
  );
};

export default BagStackNavigator;
