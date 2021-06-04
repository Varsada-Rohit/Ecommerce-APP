import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: object;
  textStyle?: object;
}

const AppButton: React.FC<Props> = ({
  onPress,
  title,
  style,

  textStyle,
}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: colors.primary, shadowColor: colors.primary},
          style,
        ]}>
        <AppText style={[styles.title, {color: colors.white}, textStyle]}>
          {title}
        </AppText>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    borderRadius: 100,
    elevation: 6,

    marginVertical: 10,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default AppButton;
