import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addToFavorites, removeFromFavorites } from '../../redux/slice/favoritesSlice/favoritesSlice';
import { CountryData, CountryDetailsProps } from '../../utils/type';

const CountryDetails: React.FC<CountryDetailsProps> = ({ route }) => {
  const { countryData } = route.params;

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.countries);
  const isFavorite = favorites.includes(countryData);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(countryData));
    } else {
      dispatch(addToFavorites(countryData));
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.countryName}>{countryData.name.common}</Text>
      <Image style={styles.flag} source={{ uri: countryData.flags.png }} />
      <Text>Official Name: {countryData.name.official}</Text>
      <Text>Capital: {countryData.capital}</Text>
      <Text>Region: {countryData.region}</Text>
      <Text>Subregion: {countryData.subregion}</Text>
      <Text>Population: {countryData.population}</Text>
      <Text>Languages: {Object.values(countryData.languages).join(', ')}</Text>
      <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
        <View style={isFavorite ? styles.favoriteContainerActive : styles.favoriteContainer}>
          <Text style={isFavorite ? styles.favoriteTextActive : styles.favoriteText}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
    marginTop: 5,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  favoriteButton: {
    marginTop: 20,
  },
  favoriteContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteContainerActive: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  favoriteTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 16,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CountryDetails;