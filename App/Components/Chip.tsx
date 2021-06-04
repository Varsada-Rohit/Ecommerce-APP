import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';

interface Props {
  text: string;
  active?: Boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: Object;
}

const Chip: React.FC<Props> = ({text, active, onPress, style}) => {
  const {colors, dark} = useTheme() as CustomTheme;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <AppText
          style={[
            styles.text,
            active && {color: colors.secondary, backgroundColor: colors.text},
            style,
          ]}>
          {text}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    fontSize: 16,

    fontFamily: 'Metropolis-SemiBold',
  },
});

export default Chip;
