import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Asegúrate de tener axios instalado

const AddCharacterScreen = ({ route, navigation }: any) => {
  const { scene } = route.params;
  const [namec, setName] = useState('');
  const [scenesCount, setScenesCount] = useState('');

  const handleAdd = async () => {
    if (!namec || !scenesCount) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Enviar los datos del nuevo personaje al backend
      const response = await axios.post('http://localhost:8082/characters', {
        namec,
        scenes_count: scenesCount,
        scenes_id: scene.id, // Usar 'scenes_id' para referenciar la escena
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Character added successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to add character.');
      }
    } catch (error) {
      console.error('Error adding character:', error);
      Alert.alert('Error', 'An error occurred while adding the character.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Character to Scene: {scene.title}</Text>
      <TextInput
        style={styles.input}
        value={namec}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={scenesCount}
        onChangeText={setScenesCount}
        placeholder="Scenes Count"
        keyboardType="numeric"
      />
      <Button title="Add Character" onPress={handleAdd} />
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

export default AddCharacterScreen;
