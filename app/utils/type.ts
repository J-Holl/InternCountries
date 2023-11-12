import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface CountryData {
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    capital: string;
    region: string;
    subregion: string;
    population: number;
    languages: {
      [key: string]: string;
    };
    flags: {
      png: string;
    };
  }

type RootStackParamList = {
    CountryDetails: { countryData: CountryData };
};

type CountryDetailsRouteProp = RouteProp<RootStackParamList, 'CountryDetails'>;
type CountryDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'CountryDetails'>;

export interface CountryDetailsProps {
    route: CountryDetailsRouteProp;
    navigation: CountryDetailsNavigationProp;
}
