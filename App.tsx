import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './navigation/LoginScreen';
import FilmScreen from './navigation/film';
import Scene from './navigation/scene';
import EditFilmScreen from './components/EditFilmScreen';
import EditSceneScreen from './components/EditSceneScreen';
import EditCharacterScreen from './components/EditCharacterScreen';
import AddFilmScreen from './components/AddFilm';
import AddSceneScreen from './components/AddScene';
import AddCharacterScreen from './components/AddCharacter';
import CharacterScreen from './navigation/character';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Film"
        component={FilmScreen}
        options={{ title: 'Films' }}
      />
      <Stack.Screen
        name="AddFilm"
        component={AddFilmScreen}
        options={{ title: 'Add Film' }}
      />
      <Stack.Screen
        name="EditFilm"
        component={EditFilmScreen}
        options={{ title: 'Edit Film' }}
      />
      <Stack.Screen
        name="Scene"
        component={Scene}
        options={{ title: 'Scenes' }}
      />
      <Stack.Screen
        name="AddScene"
        component={AddSceneScreen}
        options={{ title: 'Add Scene' }}
      />
      <Stack.Screen
        name="EditScene"
        component={EditSceneScreen}
        options={{ title: 'Edit Scene' }}
      />
      <Stack.Screen
        name="Character"
        component={CharacterScreen}
        options={{ title: 'Characters' }}
      />
      <Stack.Screen
        name="AddCharacter"
        component={AddCharacterScreen}
        options={{ title: 'Add Character' }}
      />
      <Stack.Screen
        name="EditCharacter"
        component={EditCharacterScreen}
        options={{ title: 'Edit Character' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
