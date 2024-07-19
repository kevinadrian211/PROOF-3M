import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddFilmScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!title || !duration || !description) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    // Aquí deberías agregar la lógica para agregar la película al estado
    console.log(`Film added: ${title}, ${duration}, ${description}`);

    // Navegar de vuelta después de agregar
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Film</Text>
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
