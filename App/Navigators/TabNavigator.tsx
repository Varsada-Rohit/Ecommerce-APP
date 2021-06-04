import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import HomeIcon from '../Assets/HomeIcon';
import ShopIcon from '../Assets/ShopIcon';
import AccountIcon from '../Assets/AccountIcon';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../Config/Colors';
import Shop from '../Screens/Shop';
import {View} from 'react-native';
import ProfileStack from './ProfileStack';
import ShopStackNavigator from './ShopStackNavigator';

export type TabParamList = {
  HomeStack: undefined;
  ShopStack: undefined;
  ProfileStack: undefined;
  //   Signin: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = ({}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let imgsrc;

          if (route.name === 'HomeStack') {
            return (
              <HomeIcon
                stroke={focused ? colors.primary : colors.grey}
                fill={focused ? colors.primary : 'none'}
              />
            );
          } else if (route.name === 'ShopStack') {
            return (
              <ShopIcon
                stroke={focused ? colors.primary : colors.grey}
                fill={focused ? colors.primary : 'none'}
              />
            );
          } else if (route.name === 'ProfileStack') {
            return (
              <AccountIcon
                stroke={focused ? colors.primary : colors.grey}
                fill={focused ? colors.primary : 'none'}
              />
            );
          }
          //   else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list-box' : 'ios-list';
          //   }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey,
        style: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: colors.background,
        },
        tabStyle: {
          // backgroundColor: 'transparent',
        },
      }}
      tabBar={props => (
        <View
          style={{
            backgroundColor: 'pink',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            elevation: 5,
          }}>
          <BottomTabBar {...props} />
        </View>
      )}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="ShopStack" component={ShopStackNavigator} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
