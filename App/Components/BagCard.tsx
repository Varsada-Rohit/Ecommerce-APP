import {useTheme} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';
import ListSeperator from './ListSeperator';

interface Props {}

const BagCard: React.FC<Props> = ({}) => {
  const {colors} = useTheme() as CustomTheme;
  const {greyText} = useGlobalStyle();
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimate, setPopupAnimate] = useState(new Animated.Value(0));

  const animatePopup = (value: number) => {
    Animated.timing(popupAnimate, {
      toValue: value,
      easing: Easing.ease,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      if (value == 0) {
        setShowPopup(false);
      }
    });
  };

  const popupScale = popupAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translate = popupAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 10],
  });
  const top = popupAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 10],
  });

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <Image source={require('../Assets/clothes/cloth2.jpg')} />
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <View>
            <AppText style={styles.hightLight}>Pullover</AppText>
            <AppText>
              <AppText style={[greyText, styles.smalltext]}>Color: </AppText>
              <AppText style={styles.smalltext}>Black</AppText>
              <AppText>{'   '}</AppText>
              <AppText style={[greyText, styles.smalltext, {margin: 10}]}>
                Size:{' '}
              </AppText>
              <AppText style={styles.smalltext}>L</AppText>
            </AppText>
          </View>

          <Icon
            onPress={() => {
              setShowPopup(true);
              animatePopup(1);
            }}
            name="ellipsis-vertical-sharp"
            style={{letterSpacing: -15, color: colors.grey, fontSize: 20}}
          />
        </View>
        <View style={[styles.row, {alignItems: 'center'}]}>
          <View style={styles.quantityContainer}>
            <View
              style={[styles.minusButton, {backgroundColor: colors.secondary}]}>
              <Icon name="remove-outline" style={{color: colors.grey}} />
            </View>
            <View style={{marginHorizontal: 8}}>
              <AppText>1</AppText>
            </View>
            <View
              style={[styles.minusButton, {backgroundColor: colors.secondary}]}>
              <Icon
                name="add-outline"
                style={{
                  color: colors.grey,
                }}
              />
            </View>
          </View>
          <AppText style={styles.hightLight}>30$</AppText>
        </View>
      </View>

      {showPopup && (
        <Animated.View
          style={[
            styles.optionsBox,
            {
              backgroundColor: colors.secondary,
              transform: [{scale: popupScale}],
              right: translate,
              top: top,
            },
          ]}>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={() => {
              animatePopup(0);
              //TODO:
            }}>
            <AppText style={styles.options}>Add to favorites</AppText>
          </TouchableOpacity>
          <ListSeperator />
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={() => {
              animatePopup(0);
              //TODO:
            }}>
            <AppText style={styles.options}>Delete from the list</AppText>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    marginVertical: 10,
    position: 'relative',
    zIndex: 1,
  },
  hightLight: {
    fontSize: 16,
    fontFamily: 'Metropolis-Medium',
  },
  detailContainer: {
    // flexDirection: 'row',
    padding: 8,
    flex: 1,
  },
  smalltext: {
    fontSize: 11,
  },
  minusButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 26,
    shadowColor: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  options: {
    fontSize: 11,
    padding: 15,
  },
  optionsBox: {
    position: 'absolute',
    width: '40%',

    borderRadius: 8,

    elevation: 40,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default BagCard;
