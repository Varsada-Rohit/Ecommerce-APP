import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../Components/AppText';

interface Props {}

const KidsCategory: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <AppText>Kids</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default KidsCategory;
