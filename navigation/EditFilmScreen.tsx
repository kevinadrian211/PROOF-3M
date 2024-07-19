import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditFilmScreen = ({ route, navigation }: any) => {
  const { film } = route.params;
  const [title, setTitle] = useState(film.title);
  const [duration, setDuration] = useState(film.duration);
  const [description, setDescription] = useState(film.description);

  const handleSave = () => {
    if (!title || !duration || !description) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    // Aquí deberías actualizar los datos de la película
    console.log(`Film updated: ${title}, ${duration}, ${description}`);

    // Navegar de vuelta después de guardar
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Film</Text>
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

export default EditFilmScreen;
