import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado

const AddFilmScreen = ({ navigation }: any) => {
  const [titlef, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = async () => {
    if (!titlef || !duration || !description) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Enviar los datos al backend
      const response = await axios.post('http://localhost:8082/films', {
        titlef,
        duration,
        description,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Film added successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to add film.');
      }
    } catch (error) {
      console.error('Error adding film:', error);
      Alert.alert('Error', 'An error occurred while adding the film.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Film</Text>
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
      <Button title="Add Film" onPress={handleAdd} />
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

export default AddFilmScreen;
