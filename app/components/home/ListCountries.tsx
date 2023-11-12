import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetCountriesQuery } from '../../redux/api/api';
import { useNavigation } from '@react-navigation/native';
import { CountryData } from '../../utils/type';

const ListCountries: React.FC = () => {
  const { data, isLoading, isError } = useGetCountriesQuery();
  const navigation = useNavigation<any>();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const handleCountryPress = (countryData: CountryData) => {
    navigation.navigate('HCountryDetails', { countryData });
  };

  useEffect(() => {
    if (data) {
      const filteredCountries = data.filter((country: any) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredCountries);
    }
  }, [searchTerm, data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading countries</Text>;
  }

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search countries..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <FlatList
        data={filteredData}
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
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ListCountries;