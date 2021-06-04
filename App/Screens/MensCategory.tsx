import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../Components/AppText';

interface Props {}

const MensCategory: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <AppText>Mens</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MensCategory;
