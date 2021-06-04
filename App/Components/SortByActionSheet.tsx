import {useTheme} from '@react-navigation/native';
import React, {createRef, LegacyRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  sortBy: string;
  onChangeSortBy: Function;
}

let shortMethods = [
  'Popular',
  'Newest',
  'Customer review',
  'Price: lowest to high',
  'Price: highest to low',
];

const SortByActionSheet = React.forwardRef(
  ({sortBy, onChangeSortBy}: Props, ref: LegacyRef<ActionSheet>) => {
    const {colors} = useTheme() as CustomTheme;
    const {headline3} = useGlobalStyle();

    return (
      <ActionSheet
        closable
        closeAnimationDuration={700}
        ref={ref}
        containerStyle={{
          ...styles.container,
          backgroundColor: colors.background,
        }}>
        <View style={[styles.line, {backgroundColor: colors.grey}]}></View>
        <AppText style={[headline3, styles.heading]}>Sort by</AppText>
        <View style={styles.body}>
          {shortMethods.map(name => {
            return (
              <TouchableHighlight
                underlayColor={colors.primary}
                onPress={() => onChangeSortBy(name)}
                key={name}>
                <AppText
                  style={[
                    styles.name,
                    sortBy == name
                      ? {backgroundColor: colors.primary, color: colors.white}
                      : null,
                  ]}>
                  {name}
                </AppText>
              </TouchableHighlight>
            );
          })}
        </View>
      </ActionSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
  },
  line: {
    height: 6,
    width: 60,
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 2,
  },
  body: {
    marginVertical: 20,
  },
  name: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default SortByActionSheet;
