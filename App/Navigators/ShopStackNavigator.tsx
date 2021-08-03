import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import CategoryTopTabNavigator from './CategoryTopTabNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import SubSubCategories from '../Screens/SubSubCategories';
import Shop from '../Screens/Shop';

export type ShopStackParamsList = {
  CategoryTopTab: undefined;
  SubSubCategory: undefined;
  Shop: undefined;
};

const Stack = createStackNavigator<ShopStackParamsList>();

const ShopStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardShadowEnabled: false,
      }}>
      <Stack.Screen
        name="CategoryTopTab"
        component={CategoryTopTabNavigator}
        options={{
          header: () => (
            <SafeAreaView>
              <Header title="Categories" transparent />
            </SafeAreaView>
          ),
        }}
      />
      <Stack.Screen
        name="SubSubCategory"
        component={SubSubCategories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
