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
  innerStyle?: object;
  textStyle?: object;
}

const AppButton: React.FC<Props> = ({
  onPress,
  title,
  style,
  innerStyle,
  textStyle,
}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.primary, shadowColor: colors.primary},
        style,
      ]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.inner, innerStyle]}>
          <AppText style={[styles.title, {color: colors.white}, textStyle]}>
            {title}
          </AppText>
        </View>
      </TouchableNativeFeedback>
    </View>
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
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  inner: {
    // flexDirection: 'row',
    flexGrow: 1,
    height: '100%',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default AppButton;
