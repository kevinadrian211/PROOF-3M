import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define el tipo para los parámetros de la ruta
type RootStackParamList = {
  AddCharacter: { scene: { title: string } };
};

type AddCharacterScreenRouteProp = RouteProp<RootStackParamList, 'AddCharacter'>;
type AddCharacterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddCharacter'>;

type Props = {
  route: AddCharacterScreenRouteProp;
  navigation: AddCharacterScreenNavigationProp;
};

const AddCharacterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { scene } = route.params;
  const [name, setName] = useState('');
  const [scenesCount, setScenesCount] = useState('');

  const handleAdd = () => {
    const scenes = parseInt(scenesCount, 10);

    if (!name || isNaN(scenes)) {
      Alert.alert('Validation Error', 'Please fill in all fields and ensure number of scenes is valid.');
      return;
    }

    // Aquí deberías agregar el personaje al estado de la escena
    console.log(`Character added: ${name}, Scenes count: ${scenes}`);

    // Navegar de vuelta después de agregar
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Character to Scene {scene.title}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={scenesCount}
        onChangeText={setScenesCount}
        placeholder="Number of Scenes"
        keyboardType="numeric"
      />
      <Button title="Add Character" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddCharacterScreen;
