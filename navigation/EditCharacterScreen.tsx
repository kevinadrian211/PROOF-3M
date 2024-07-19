import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define el tipo para los parámetros de la ruta
type RootStackParamList = {
  EditCharacter: { character: { name: string; scenes: number } };
};

type EditCharacterScreenRouteProp = RouteProp<RootStackParamList, 'EditCharacter'>;
type EditCharacterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditCharacter'>;

type Props = {
  route: EditCharacterScreenRouteProp;
  navigation: EditCharacterScreenNavigationProp;
};

const EditCharacterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { character } = route.params;
  const [name, setName] = useState(character.name);
  const [scenesCount, setScenesCount] = useState(character.scenes.toString());

  const handleSave = () => {
    const scenes = parseInt(scenesCount, 10);

    if (!name || isNaN(scenes)) {
      Alert.alert('Validation Error', 'Please fill in all fields and ensure number of scenes is valid.');
      return;
    }

    // Aquí deberías actualizar los datos del personaje
    console.log(`Character updated: ${name}, Scenes count: ${scenes}`);

    // Navegar de vuelta después de guardar
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Character</Text>
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
      <Button title="Save" onPress={handleSave} />
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

export default EditCharacterScreen;
