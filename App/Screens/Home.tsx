import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from '../Components/AppText';
import Colors from '../Config/Colors';
import {useTheme} from '@react-navigation/native';

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const {container} = useGlobalStyle();
  const {dark} = useTheme();

  return (
    <View style={[container, styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.container1}>
        <Image
          source={
            dark
              ? require('../Assets/mainDark.jpg')
              : require('../Assets/main.jpg')
          }
          style={styles.image}
        />
        <AppText style={[styles.newCollection, styles.bannertext]}>
          New collection
        </AppText>
      </View>
      <View style={[styles.container1, {flexDirection: 'row'}]}>
        <View style={styles.container1}>
          <View style={[styles.container1, {justifyContent: 'center'}]}>
            <AppText style={[styles.bannertext, styles.summerSale]}>
              Summer sale
            </AppText>
          </View>
          <View style={styles.container1}>
            <Image
              source={require('../Assets/black.jpg')}
              style={styles.image}
            />
            <AppText style={[styles.bannertext, styles.black]}>Black</AppText>
          </View>
        </View>
        <View style={styles.container1}>
          <Image
            source={
              dark
                ? require('../Assets/menDark.jpg')
                : require('../Assets/men.jpg')
            }
            style={styles.image}
          />
          <View
            style={
              dark ? {position: 'absolute', top: '15%', left: 10} : styles.mens
            }>
            <AppText style={styles.bannertext}>Men's hoodies</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  container1: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  newCollection: {
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
  summerSale: {
    paddingHorizontal: 10,
    color: Colors.DarkThemeColor.primary,
  },
  mens: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannertext: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.DarkThemeColor.white,
  },
  black: {
    position: 'absolute',
    left: 10,
    bottom: 15,
  },
});

export default Home;
