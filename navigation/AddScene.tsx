import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddSceneScreen = ({ route, navigation }: any) => {
  const { film } = route.params;
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [characters, setCharacters] = useState('');

  const handleAdd = () => {
    if (!title || !duration || !characters) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    // Aquí deberías agregar la escena al estado del film
    console.log(`Scene added: ${title}, ${duration}, ${characters.split(',').map(c => c.trim()).join(', ')}`);

    // Navegar de vuelta después de agregar
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Scene to {film.title}</Text>
      <TextInput
        style={styles.input}
        value={title}
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
        value={characters}
        onChangeText={setCharacters}
        placeholder="Characters (comma separated)"
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
