import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Header from './Header';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AccountDetailList from './AccountDetailList';
import AppButton from './AppButton';

interface Props {
  visible?: boolean;
  closeFilterModal: Function;
}

let data = [
  {name: 'black', color: 'black'},
  {name: 'red', color: 'red'},
  {name: 'green', color: 'green'},
  {name: 'white', color: 'white'},
  {name: 'blue', color: 'blue'},
];

let sizes = ['XS', 'S', 'M', 'L', 'XL'];

let Category = ['All', 'Women', 'Men', 'Boys', 'Girls', 'Kids'];

const FilterModal: React.FC<Props> = ({visible, closeFilterModal}) => {
  const {container} = useGlobalStyle();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['S']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const {colors, dark} = useTheme() as CustomTheme;

  const onColorPress = (color: string) => {
    if (selectedColor.includes(color)) {
      let update: string[] = [...selectedColor];
      update.splice(update.indexOf(color), 1);
      setSelectedColor(update);
    } else {
      let update = [...selectedColor];
      update.push(color);
      setSelectedColor(update);
    }
  };

  const onSizePress = (size: string) => {
    if (selectedSizes.includes(size)) {
      let update: string[] = [...selectedSizes];
      update.splice(update.indexOf(size), 1);
      setSelectedSizes(update);
    } else {
      let update = [...selectedSizes];
      update.push(size);
      setSelectedSizes(update);
    }
  };

  return (
    <Modal
      visible={visible}
      presentationStyle="fullScreen"
      animationType="slide">
      <Header
        title="Filters"
        hideSearch
        onBackbtnPress={() => closeFilterModal()}
      />
      <ScrollView style={[container, styles.container]} nestedScrollEnabled>
        <AppText style={styles.title}>Price range</AppText>
        <View
          style={[styles.filterContainer, {backgroundColor: colors.secondary}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText>{'$' + priceRange[0].toString()}</AppText>
            <AppText style={{textAlign: 'right', justifyContent: 'flex-end'}}>
              {'$' + priceRange[1].toString()}
            </AppText>
          </View>

          <MultiSlider
            markerStyle={{backgroundColor: colors.primary}}
            trackStyle={{backgroundColor: colors.grey}}
            selectedStyle={{backgroundColor: colors.primary}}
            isMarkersSeparated={true}
            values={[0, 10000]}
            min={0}
            max={10000}
            step={50}
            onValuesChange={values => setPriceRange(values)}
            containerStyle={{alignItems: 'center'}}
            sliderLength={Dimensions.get('window').width - 40}
          />
        </View>
        <AppText style={styles.title}>Colors</AppText>
        <View
          style={[styles.filterContainer, {backgroundColor: colors.secondary}]}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={() => onColorPress(item.name)}>
                <View
                  style={[
                    styles.activeCircle,
                    {
                      borderColor: selectedColor.includes(item.name)
                        ? dark
                          ? colors.white
                          : colors.primary
                        : 'transparent',
                    },
                  ]}>
                  <View
                    style={[
                      styles.colorCircle,
                      {backgroundColor: item.name},
                    ]}></View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
        <AppText style={styles.title}>Sizes</AppText>
        <View
          style={[styles.filterContainer, {backgroundColor: colors.secondary}]}>
          <FlatList
            horizontal
            data={sizes}
            keyExtractor={item => item}
            renderItem={({item}) => {
              let active = selectedSizes.includes(item);
              return (
                <TouchableWithoutFeedback onPress={() => onSizePress(item)}>
                  <View
                    style={[
                      styles.sizeBox,
                      {
                        borderColor: active ? colors.primary : colors.grey,
                        backgroundColor: active
                          ? colors.primary
                          : 'transparent',
                      },
                    ]}>
                    <AppText style={active ? {color: colors.secondary} : {}}>
                      {item}
                    </AppText>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
        <AppText style={styles.title}>Category</AppText>
        <View
          style={[
            styles.filterContainer,
            {
              backgroundColor: colors.secondary,
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
            },
          ]}>
          {Category.map(item => {
            let active = selectedCategory == item;

            return (
              <TouchableWithoutFeedback
                key={item}
                onPress={() => setSelectedCategory(item)}>
                <View
                  style={[
                    styles.sizeBox,
                    {
                      borderColor: active ? colors.primary : colors.grey,
                      backgroundColor: active ? colors.primary : 'transparent',
                    },
                    styles.category,
                  ]}>
                  <AppText style={active ? {color: colors.secondary} : {}}>
                    {item}
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <AccountDetailList
          title="Brand"
          subTitle="adidas Originals, Jack &amp; Jones, s.Oliver"
          onPress={() => {}}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Discard"
          style={[
            styles.button,
            styles.discard,
            {borderColor: colors.text, elevation: 0},
          ]}
          textStyle={[styles.buttonText, {color: colors.text}]}
          onPress={() => {
            closeFilterModal();
          }}
        />
        <AppButton
          title="Apply"
          style={[styles.button]}
          textStyle={styles.buttonText}
          onPress={() => {}}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  filterContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 1,
  },
  colorCircle: {
    height: 36,
    width: 36,
    borderRadius: 50,

    elevation: 1,
  },
  activeCircle: {
    height: 44,
    width: 44,
    borderRadius: 50,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  sizeBox: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  category: {
    flexDirection: 'column',
    marginBottom: 10,
    marginRight: 0,
    marginHorizontal: 10,
    width: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 26,
  },
  button: {
    width: '45%',
    paddingVertical: 8,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
  discard: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
});

export default FilterModal;
