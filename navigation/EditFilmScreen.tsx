import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado

const EditFilmScreen = ({ route, navigation }: any) => {
  const { film } = route.params;
  const [titlef, setTitle] = useState(film.titlef);
  const [duration, setDuration] = useState(film.duration.toString());
  const [description, setDescription] = useState(film.description || '');

  const handleUpdate = async () => {
    if (!titlef || !duration) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Enviar los datos actualizados del film al backend
      const response = await axios.put(`http://localhost:8082/films/${film.id}`, {
        titlef,
        duration: parseInt(duration),
        description,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Film updated successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to update film.');
      }
    } catch (error) {
      console.error('Error updating film:', error);
      Alert.alert('Error', 'An error occurred while updating the film.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Film</Text>
      <TextInput
        style={styles.input}
        value={titlef}
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
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />
      <Button title="Update Film" onPress={handleUpdate} />
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

export default EditFilmScreen;
