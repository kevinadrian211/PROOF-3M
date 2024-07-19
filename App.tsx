import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilmScreen from './navigation/film';
import SceneScreen from './navigation/scene';
import CharacterScreen from './navigation/character';
import EditFilmScreen from './navigation/EditFilmScreen';
import EditSceneScreen from './navigation/EditSceneScreen';
import EditCharacterScreen from './navigation/EditCharacterScreen';
import AddFilmScreen from './navigation/AddFilm';
import AddSceneScreen from './navigation/AddScene';
import AddCharacterScreen from './navigation/AddCharacter';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Film">
      <Stack.Screen name="Film" component={FilmScreen} />
      <Stack.Screen name="AddFilm" component={AddFilmScreen} />
      <Stack.Screen name="EditFilm" component={EditFilmScreen} />
      <Stack.Screen name="Scene" component={SceneScreen} />
      <Stack.Screen name="AddScene" component={AddSceneScreen} />
      <Stack.Screen name="EditScene" component={EditSceneScreen} />
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="AddCharacter" component={AddCharacterScreen} />
      <Stack.Screen name="EditCharacter" component={EditCharacterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
