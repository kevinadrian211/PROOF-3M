import React from 'react';
import { Button, Alert } from 'react-native';
import axios from 'axios';

const DeleteFilmButton = ({ id, onSuccess }: { id: number; onSuccess: () => void }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8082/films/${id}`);
      if (response.status === 200) {
        Alert.alert('Success', 'Film deleted successfully!');
        onSuccess(); // Actualizar la lista de películas
      } else {
        Alert.alert('Error', 'Failed to delete film.');
      }
    } catch (error) {
      console.error('Error deleting film:', error);
      Alert.alert('Error', 'An error occurred while deleting the film.');
    }
  };

  return <Button title="Delete Film" onPress={handleDelete} />;
};

const DeleteSceneButton = ({ id, onSuccess }: { id: number; onSuccess: () => void }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8082/scenes/${id}`);
      if (response.status === 200) {
        Alert.alert('Success', 'Scene deleted successfully!');
        onSuccess(); // Actualizar la lista de escenas
      } else {
        Alert.alert('Error', 'Failed to delete scene.');
      }
    } catch (error) {
      console.error('Error deleting scene:', error);
      Alert.alert('Error', 'An error occurred while deleting the scene.');
    }
  };

  return <Button title="Delete Scene" onPress={handleDelete} />;
};

const DeleteCharacterButton = ({ id, onSuccess }: { id: number; onSuccess: () => void }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8082/characters/${id}`);
      if (response.status === 200) {
        Alert.alert('Success', 'Character deleted successfully!');
        onSuccess(); // Actualizar la lista de personajes
      } else {
        Alert.alert('Error', 'Failed to delete character.');
      }
    } catch (error) {
      console.error('Error deleting character:', error);
      Alert.alert('Error', 'An error occurred while deleting the character.');
    }
  };

  return <Button title="Delete Character" onPress={handleDelete} />;
};

export { DeleteFilmButton, DeleteSceneButton, DeleteCharacterButton };
