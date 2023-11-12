import React from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import { CountryData, CountryDetailsProps } from '../../utils/type';

const ListFavorites: React.FC = () => {
  const favorites = useAppSelector(state => state.favorites);
  const navigation = useNavigation<any>();

  const handleCountryPress = (countryData: CountryData) => {
    navigation.navigate('FCountryDetails', { countryData });
  };

  return (
    <View style={styles.container}>
      {favorites.countries.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites.countries}
          keyExtractor={(item: CountryData) => item.name.common}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCountryPress(item)}>
              <View style={styles.countryItem}>
                <Image style={styles.flag} source={{ uri: item.flags.png }} />
                <Text key={item.name.common}>{item.name.common}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default ListFavorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
});