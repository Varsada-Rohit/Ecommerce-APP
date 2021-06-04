import {useTheme} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import HeartIcon from '../Assets/HeartIcon';
import {Rating} from 'react-native-ratings';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';
import {Easing} from 'react-native-reanimated';
import IconBounce from '../Animations/IconBounce';

interface Props {}

const Card: React.FC<Props> = ({}) => {
  const [inFavorite, setInFavorite] = useState(false);
  const {colors} = useTheme() as CustomTheme;
  const animationRef = useRef();

  return (
    <View style={styles.container}>
      <View style={{width: '100%', position: 'relative'}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../Assets/clothes/cloth.jpg')}
            style={{width: '100%'}}
          />
        </View>
        <View style={[styles.offer, {backgroundColor: colors.primary}]}>
          <AppText style={{fontSize: 11, color: colors.white}}>-20%</AppText>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            // if (inFavorite) {
            //   setHeartAnimateValue(new Animated.Value(0));
            // } else {
            //   animationRef.current?.animateHeart();
            // }
            setInFavorite(!inFavorite);
          }}>
          <View
            style={[
              styles.addToFavorite,
              {backgroundColor: colors.background},
            ]}>
            <IconBounce>
              <HeartIcon
                width={13}
                height={12}
                fill={inFavorite ? colors.primary : 'none'}
                stroke={inFavorite ? colors.primary : colors.grey}
              />
            </IconBounce>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{paddingVertical: 5}}>
        <View style={styles.ratingContainer}>
          <View>
            <Rating
              readonly
              startingValue={5}
              imageSize={13}
              tintColor={colors.background}
              type="custom"
              ratingColor="#FFBA49"
              ratingBackgroundColor="transparent"
            />
          </View>
          <AppText style={{color: colors.grey, fontSize: 10, marginLeft: 3}}>
            (10)
          </AppText>
        </View>
        <AppText style={[styles.brand, {color: colors.grey}]}>
          Dorothy Perkins
        </AppText>
        <AppText style={styles.name}>Evening Dress</AppText>
        <View style={styles.priceContainer}>
          <AppText
            style={{color: colors.grey, textDecorationLine: 'line-through'}}>
            15$
          </AppText>
          <AppText style={{color: colors.primary, marginLeft: 5}}>12$</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  imageContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  offer: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 15,
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
  brand: {
    fontSize: 11,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 3,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  rating: {
    fontSize: 5,
  },
});

export default Card;
