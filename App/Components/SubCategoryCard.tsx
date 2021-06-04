import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  name: string;
  image: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const SubCategoryCard: React.FC<Props> = ({name, image, onPress}) => {
  const {colors} = useTheme() as CustomTheme;
  const {headline3} = useGlobalStyle();

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        <View style={styles.left}>
          <AppText style={[headline3, {paddingLeft: 15}]}>{name}</AppText>
        </View>
        <View style={styles.right}>
          <Image source={image} style={{width: '100%', height: '100%'}} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default SubCategoryCard;
