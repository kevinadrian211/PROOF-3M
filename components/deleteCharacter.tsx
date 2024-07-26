import React from 'react';
import { Button, Alert } from 'react-native';
import axios from 'axios';

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

export default DeleteCharacterButton;
