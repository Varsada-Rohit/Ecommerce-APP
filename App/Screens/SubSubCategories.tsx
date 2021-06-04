import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import Header from '../Components/Header';
import ListSeperator from '../Components/ListSeperator';
import useGlobalStyle from '../Config/useGlobalStyle';
import {ShopStackParamsList} from '../Navigators/ShopStackNavigator';

type SubSubCategoryScreenNavigationProp = StackNavigationProp<
  ShopStackParamsList,
  'SubSubCategory'
>;

interface Props {
  navigation: SubSubCategoryScreenNavigationProp;
}

let data = [
  'Tops',
  'Shirts and Blouses',
  'Cardigans and Sweaters',
  'Knitwear',
  'Blazers',
  'Outwear',
  'Pants',
  'Jeans',
  'Shorts',
  'Skirts',
];

const SubSubCategories: React.FC<Props> = ({navigation}) => {
  const {container, greyText} = useGlobalStyle();
  useTheme();

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header title="Categories" />
      <View style={styles.header}>
        <AppButton
          title="view all items"
          textStyle={{fontSize: 14}}
          onPress={() => {}}
        />
        <AppText style={greyText}>Choose category</AppText>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <ListSeperator />}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Shop')}>
              <View>
                <AppText style={styles.category}>{item}</AppText>
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 10,
  },
  category: {
    marginLeft: 30,
    marginVertical: 15,
  },
  list: {
    marginVertical: 15,
    flex: 1,
  },
});

export default SubSubCategories;
