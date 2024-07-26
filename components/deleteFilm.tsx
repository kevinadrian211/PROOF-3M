import React from 'react';
import { Button, Alert } from 'react-native';
import api from '../config/apiConfig'; // Usa apiConfig para las solicitudes

const DeleteFilmButton = ({ id, onSuccess }: { id: number; onSuccess: () => void }) => {
  const handleDelete = async () => {
    try {
      const response = await api.delete(`/films/${id}`);
      if (response.status === 200) {
        Alert.alert('Success', 'Film deleted successfully!');
        onSuccess(); // Llama a la función para actualizar la lista de películas
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

export default DeleteFilmButton;
