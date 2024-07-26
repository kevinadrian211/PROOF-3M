import React from 'react';
import { Button, Alert } from 'react-native';
import axios from 'axios';

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

export default DeleteSceneButton;
