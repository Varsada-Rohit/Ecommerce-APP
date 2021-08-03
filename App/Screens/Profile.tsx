import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from 'native-base';
import React from 'react';
import {View, StyleSheet, StatusBar, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AccountDetailList from '../Components/AccountDetailList';
import AppText from '../Components/AppText';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import {ProfileStackParamsList} from '../Navigators/ProfileStack';

type data = {
  title: string;
  subTitle: string;
  screen: keyof ProfileStackParamsList;
};

let data: Array<data> = [
  {
    title: 'My orders',
    subTitle: 'Already have 12 orders',
    screen: 'MyOrders',
  },
  {
    title: 'Shipping addresses',
    subTitle: '3 ddresses',
    screen: 'MyOrders',
  },
  {
    title: 'Payment methods',
    subTitle: 'Visa  **34',
    screen: 'MyOrders',
  },
  {
    title: 'Promocodes',
    subTitle: 'You have special promocodes',
    screen: 'MyOrders',
  },
  {
    title: 'My reviews',
    subTitle: 'Reviews for 4 items',
    screen: 'MyOrders',
  },
  {
    title: 'Settings',
    subTitle: 'Notifications, password',
    screen: 'Settings',
  },
];

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamsList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Profile: React.FC<Props> = ({navigation}) => {
  const {container, headline3, greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header hideBack transparent />
      <ScrollView>
        <View style={styles.header}>
          <Heading>My profile</Heading>
          <View style={styles.userDetail}>
            <View style={styles.imageContainer}>
              <Image source={require('../Assets/profile.jpg')} />
            </View>
            <View style={styles.nameContainer}>
              <AppText style={headline3}>Matilda Brown</AppText>
              <AppText style={greyText}>matildabrown@mail.com</AppText>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          {data.map((item, index) => {
            return (
              <View key={index.toString()}>
                <AccountDetailList
                  title={item.title}
                  subTitle={item.subTitle}
                  onPress={() => navigation.navigate(item.screen)}
                />
                {index < data.length - 1 && (
                  <View
                    style={[
                      styles.itemSeperator,
                      {backgroundColor: colors.grey},
                    ]}></View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 15,
  },
  nameContainer: {
    marginLeft: 20,
  },
  list: {
    marginVertical: 20,
  },
  itemSeperator: {
    width: '100%',
    height: 1,
    opacity: 0.05,
  },
});

export default Profile;
