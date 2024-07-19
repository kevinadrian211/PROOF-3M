import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilmScreen from './film';
import SceneScreen from './scene';
import CharacterScreen from './character';
import EditFilmScreen from './EditFilmScreen';
import EditSceneScreen from './EditSceneScreen';
import EditCharacterScreen from './EditCharacterScreen';
import AddFilmScreen from './AddFilm';
import AddSceneScreen from './AddScene';
import AddCharacterScreen from './AddCharacter';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
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
};

export default AppNavigator;
