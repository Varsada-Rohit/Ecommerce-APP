import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import HeartIcon from '../Assets/HeartIcon';

import AppText from './AppText';

interface Props {}

const HorizontalCard: React.FC<Props> = ({}) => {
  const {greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/clothes/cloth.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <AppText style={styles.name}>Pullover</AppText>
        <AppText style={[greyText, styles.brand]}>Mango</AppText>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View>
            <Rating
              readonly
              startingValue={5}
              imageSize={13}
              tintColor={colors.secondary}
              type="custom"
              ratingColor="#FFBA49"
              ratingBackgroundColor="transparent"
            />
          </View>
          <AppText style={{color: colors.grey, fontSize: 10, marginLeft: 3}}>
            (10)
          </AppText>
        </View>
        <View style={styles.priceContainer}>
          <AppText
            style={{color: colors.grey, textDecorationLine: 'line-through'}}>
            15$
          </AppText>
          <AppText style={{color: colors.primary, marginLeft: 5}}>12$</AppText>
        </View>
      </View>
      <View
        style={[styles.addToFavorite, {backgroundColor: colors.background}]}>
        <HeartIcon width={13} height={12} fill="none" stroke={colors.grey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 105,
    borderRadius: 8,
    flexDirection: 'row',

    marginVertical: 8,
    elevation: 5,
    position: 'relative',
  },
  imageContainer: {
    width: 105,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  right: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  brand: {
    fontSize: 11,
    marginVertical: 1,
  },
  addToFavorite: {
    position: 'absolute',
    height: 36,
    width: 36,
    borderRadius: 50,
    bottom: -18,
    right: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default HorizontalCard;
