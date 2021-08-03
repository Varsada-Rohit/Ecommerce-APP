import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppButton from './AppButton';
import Header from './Header';
import {CheckBox, Icon} from 'native-base';
import {useEffect} from 'react';

// import CheckBox from '@react-native-community/checkbox';

interface Props {
  visible?: boolean;
  closeBrandFilterModal: Function;
  selectedBrand: string[];
  setSelectedBrand: Function;
}

let data = [
  'addidas',
  'addidas original',
  'Blend',
  'champion',
  'Diesel',
  'Jack & Jones',
  'Naf Naf',
];

const BrandFilterModal: React.FC<Props> = ({
  closeBrandFilterModal,
  visible,
  selectedBrand,
  setSelectedBrand,
}) => {
  const {container} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  const [searchText, setSearchText] = useState<string>();
  const [Brands, setBrands] = useState<string[]>([]);

  const onPressList = (brand: string) => {
    let newBrandList: string[] = [...selectedBrand];
    if (selectedBrand.includes(brand)) {
      newBrandList.splice(newBrandList.indexOf(brand), 1);
    } else {
      newBrandList.push(brand);
    }
    setSelectedBrand(newBrandList);
  };

  const onSearch = (search: string) => {
    console.log('ss', search);

    if (search.length < 1) {
      setBrands(data);
      return;
    }
    let filtered = data.filter(brand =>
      brand.toLowerCase().includes(search.toLowerCase()),
    );
    setBrands(filtered);
  };

  useEffect(() => {
    setBrands(data);
  }, []);

  return (
    <Modal visible={visible} animationType="slide">
      <Header
        title="Brand"
        hideSearch
        onBackbtnPress={() => closeBrandFilterModal()}
      />
      <View style={[container, styles.container]}>
        <View
          style={[styles.searchContainer, {backgroundColor: colors.secondary}]}>
          <Icon
            name="search-sharp"
            style={{
              color: colors.grey,
              fontSize: 20,
            }}
          />
          <TextInput
            keyboardType="web-search"
            placeholder="Search"
            style={styles.textinput}
            placeholderTextColor={colors.grey}
            value={searchText}
            onChangeText={value => {
              setSearchText(value);
              onSearch(value);
            }}
          />
        </View>
        <FlatList
          ListEmptyComponent={() => (
            <AppText style={{textAlign: 'center', color: colors.grey}}>
              There are no brand matching "{searchText}"
            </AppText>
          )}
          data={Brands}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() => onPressList(item)}>
              <AppText
                style={[
                  styles.brand,
                  {
                    color: selectedBrand.includes(item)
                      ? colors.primary
                      : colors.text,
                  },
                ]}>
                {item}
              </AppText>
              <CheckBox
                color={
                  selectedBrand.includes(item) ? colors.primary : colors.grey
                }
                style={styles.checkBox}
                checked={selectedBrand.includes(item)}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={[styles.buttonContainer, {backgroundColor: colors.secondary}]}>
        <AppButton
          title="Discard"
          style={[
            styles.button,
            styles.discard,
            {borderColor: colors.text, elevation: 0},
          ]}
          textStyle={[styles.buttonText, {color: colors.text}]}
          onPress={() => {
            setSelectedBrand([]);
            closeBrandFilterModal();
          }}
        />
        <AppButton
          title="Apply"
          style={[styles.button]}
          textStyle={styles.buttonText}
          onPress={() => closeBrandFilterModal()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 26,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 1,
    // shadowRadius: 3.84,
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
  list: {
    paddingVertical: 8,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  brand: {
    flex: 1,
  },
  checkBox: {
    marginRight: 15,
    paddingBottom: 0,
    paddingLeft: 0,
    borderRadius: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 100,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  textinput: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default BrandFilterModal;
