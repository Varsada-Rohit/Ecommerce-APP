import {Icon} from 'native-base';
import React, {createRef, LegacyRef, Ref, RefAttributes, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AppText from '../Components/AppText';
import Card from '../Components/Card';
import Chip from '../Components/Chip';
import Header from '../Components/Header';
import useGlobalStyle from '../Config/useGlobalStyle';
import SortingIcon from '../Assets/SortingIcon';
import {useTheme} from '@react-navigation/native';
import SortByActionSheet from '../Components/SortByActionSheet';
import {CustomTheme} from '../Config/Colors';
import HorizontalCard from '../Components/HorizontalCard';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actions-sheet';
import FilterModal from '../Components/FilterModal';

interface Props {}

let data = ['T-shirts', 'Crop tops', 'sleeveless', 'Blouses'];

const Shop: React.FC<Props> = ({}) => {
  const {container} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;
  const actionSheetRef = createRef<ActionSheet>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(data);
  const [sortBy, setSortBy] = useState('Price: lowest to high');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isGrid, setIsGrid] = useState(false);

  const onCategoryPress = (item: string) => {
    let update = [...selectedCategories];
    if (selectedCategories.includes(item)) {
      update.splice(update.indexOf(item), 1);
      setSelectedCategories(update);
    } else {
      update.push(item);
      setSelectedCategories(update);
    }
  };

  const onSortButton = () => {
    actionSheetRef.current?.show();
  };

  const closeFilterModal = () => {
    setShowFilterModal(false);
  };

  const onChangeSortBy = (name: string) => {
    setSortBy(name);
    actionSheetRef.current?.setModalVisible(false);
  };

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header title="Women's tops" />
      <View style={{backgroundColor: colors.secondary, elevation: 6}}>
        <View style={{marginVertical: 5}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            horizontal
            data={data}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Chip
                text={item}
                active={selectedCategories.includes(item)}
                style={styles.chip}
                onPress={() => onCategoryPress(item)}
              />
            )}
          />
        </View>
        <View
          style={[
            styles.row,
            styles.listConfig,
            {backgroundColor: colors.background},
          ]}>
          <TouchableWithoutFeedback
            style={styles.row}
            onPress={() => setShowFilterModal(true)}>
            <AppText>
              <Icon name="ios-filter" style={{color: colors.text}} />
            </AppText>
            <AppText style={styles.space}>Filters</AppText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.row}
            onPress={() => onSortButton()}>
            <SortingIcon background={colors.text} />

            <AppText style={styles.space}>{sortBy}</AppText>
          </TouchableWithoutFeedback>
          <View>
            {isGrid ? (
              <Icon
                name="list-sharp"
                style={{color: colors.text}}
                onPress={() => setIsGrid(false)}
              />
            ) : (
              <Icon
                name="grid-sharp"
                style={{color: colors.text}}
                onPress={() => setIsGrid(true)}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.body}>{isGrid ? <Card /> : <HorizontalCard />}</View>
      <SortByActionSheet
        ref={actionSheetRef}
        sortBy={sortBy}
        onChangeSortBy={onChangeSortBy}
      />
      <FilterModal
        visible={showFilterModal}
        closeFilterModal={closeFilterModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },

  chip: {
    paddingVertical: 6,
    paddingHorizontal: 25,
    marginHorizontal: 3,
    fontFamily: 'Matropolis-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listConfig: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  body: {
    padding: 10,
  },
  space: {
    marginLeft: 5,
  },
});

export default Shop;
