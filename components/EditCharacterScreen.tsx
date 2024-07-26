import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definir un tipo para el objeto de personaje
interface Character {
  id: number; // Asegúrate de que el ID esté presente para la actualización
  namec: string; // Cambiado para coincidir con el nombre de campo en la base de datos
  scenes_count: number; // Cambiado para coincidir con el nombre de campo en la base de datos
}

// Definir el tipo para los parámetros de la ruta
type RootStackParamList = {
  EditCharacter: { character: Character };
};

type EditCharacterScreenRouteProp = RouteProp<RootStackParamList, 'EditCharacter'>;
type EditCharacterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditCharacter'>;

type Props = {
  route: EditCharacterScreenRouteProp;
  navigation: EditCharacterScreenNavigationProp;
};

const EditCharacterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { character } = route.params;
  const [namec, setName] = useState<string>(character.namec);
  const [scenes_count, setScenesCount] = useState<string>(character.scenes_count.toString());

  const handleSave = async () => {
    const scenesCount = parseInt(scenes_count, 10);

    if (!namec || isNaN(scenesCount)) {
      Alert.alert('Validation Error', 'Please fill in all fields and ensure the number of scenes is valid.');
      return;
    }

    try {
      // Enviar los datos actualizados del personaje al backend
      const response = await axios.put(`http://localhost:8082/characters/${character.id}`, {
        namec, // Usar 'namec' para coincidir con el nombre de campo en la base de datos
        scenes_count: scenesCount, // Usar 'scenes_count' para coincidir con el nombre de campo en la base de datos
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Character updated successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to update character.');
      }
    } catch (error) {
      console.error('Error updating character:', error);
      Alert.alert('Error', 'An error occurred while updating the character.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Character</Text>
      <TextInput
        style={styles.input}
        value={namec}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={scenes_count}
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
