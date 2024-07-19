import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definir un tipo para el objeto de escena
interface Scene {
  id: number; // Asegúrate de que el ID esté presente para la actualización
  titles: string;
  duration: string;
  filmId: number; // ID de la película a la que pertenece la escena
}

// Definir el tipo para los parámetros de la ruta
type RootStackParamList = {
  EditScene: { scene: Scene };
};

type EditSceneScreenRouteProp = RouteProp<RootStackParamList, 'EditScene'>;
type EditSceneScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditScene'>;

type Props = {
  route: EditSceneScreenRouteProp;
  navigation: EditSceneScreenNavigationProp;
};

const EditSceneScreen: React.FC<Props> = ({ route, navigation }) => {
  const { scene } = route.params;
  const [titles, setTitles] = useState<string>(scene.titles);
  const [duration, setDuration] = useState<string>(scene.duration.toString());

  const handleSave = async () => {
    if (!titles || !duration) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Enviar los datos actualizados de la escena al backend
      const response = await axios.put(`http://localhost:8082/scenes/${scene.id}`, {
        titles,
        duration: parseInt(duration),
        films_id: scene.filmId, // Usar 'films_id' para referenciar la película
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Scene updated successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to update scene.');
      }
    } catch (error) {
      console.error('Error updating scene:', error);
      Alert.alert('Error', 'An error occurred while updating the scene.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Scene</Text>
      <TextInput
        style={styles.input}
        value={titles}
        onChangeText={setTitles}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        placeholder="Duration"
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

export default EditSceneScreen;
