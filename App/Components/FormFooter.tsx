import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import ArrowIcon from '../Assets/ArrowIcon';

import AppText from './AppText';

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const FormFooter: React.FC<Props> = ({text, onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.formFooter}>
        <AppText>{text}</AppText>
        <ArrowIcon style={styles.formFooterIcon} color={colors.primary} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  formFooterIcon: {
    marginLeft: 8,
  },

  formFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15,
    color: 'pink',
  },
});

export default FormFooter;
