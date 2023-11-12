import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './pages/home';
import Favorites from './pages/favorites';
import CountryDetails from './components/home/CountryDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="HCountryDetails" component={CountryDetails} options={{ headerTitle: 'Country details' }} />

    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      >
      <Stack.Screen name="FavoritesStack" component={Favorites} options={{ headerShown: false }} />
      <Stack.Screen name="FCountryDetails" component={CountryDetails} options={{ headerTitle: 'Country details' }} />
    </Stack.Navigator>
  );
};

export default function EntryApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'star' : 'star-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerTitleAlign: 'center', }} />
        <Tab.Screen name="Favorites" component={FavoritesStack} options={{ headerTitleAlign: 'center', }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}