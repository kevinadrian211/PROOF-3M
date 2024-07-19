import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado

const AddSceneScreen = ({ route, navigation }: any) => {
  const { film } = route.params;
  const [titles, setTitle] = useState('');
  const [duration, setDuration] = useState('');

  const handleAdd = async () => {
    if (!titles || !duration) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Enviar los datos de la nueva escena al backend
      const response = await axios.post('http://localhost:8082/scenes', {
        titles,
        duration,
        films_id: film.id, // Usar 'films_id' para referenciar la película
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Scene added successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to add scene.');
      }
    } catch (error) {
      console.error('Error adding scene:', error);
      Alert.alert('Error', 'An error occurred while adding the scene.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Scene to {film.title}</Text>
      <TextInput
        style={styles.input}
        value={titles}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        placeholder="Duration"
        keyboardType="numeric"
      />
      <Button title="Add Scene" onPress={handleAdd} />
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

export default AddSceneScreen;
