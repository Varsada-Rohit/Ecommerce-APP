import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WomensCategory from '../Screens/WomensCategory';
import MensCategory from '../Screens/MensCategory';
import KidsCategory from '../Screens/KidsCategory';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../Config/Colors';

export type CategoryTopTabParamsList = {
  WomensCategory: undefined;
  MensCategory: undefined;
  KidsCategory: undefined;
};

const Tab = createMaterialTopTabNavigator<CategoryTopTabParamsList>();

const CategoryTopTabNavigator: React.FC = () => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textTransform: 'capitalize',
          fontSize: 14,
          fontFamily: 'Metropolis-Regular',
        },
        activeTintColor: colors.text,
        inactiveTintColor: colors.grey,
        style: {
          backgroundColor: colors.background,
        },
      }}>
      <Tab.Screen
        name="WomensCategory"
        component={WomensCategory}
        options={{title: 'Women'}}
      />
      <Tab.Screen
        name="MensCategory"
        component={MensCategory}
        options={{title: 'Men'}}
      />
      <Tab.Screen
        name="KidsCategory"
        component={KidsCategory}
        options={{title: 'Kids'}}
      />
    </Tab.Navigator>
  );
};

export default CategoryTopTabNavigator;
