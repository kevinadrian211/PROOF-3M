import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Definir un tipo para el objeto de escena
interface Scene {
  title: string;
  duration: string;
  characters: string[];
}

// Definir las props del componente
interface EditSceneScreenProps {
  route: {
    params: {
      scene: Scene;
    };
  };
  navigation: {
    goBack: () => void;
  };
}

const EditSceneScreen: React.FC<EditSceneScreenProps> = ({ route, navigation }) => {
  const { scene } = route.params;
  const [title, setTitle] = useState<string>(scene.title);
  const [duration, setDuration] = useState<string>(scene.duration);
  const [characters, setCharacters] = useState<string>(scene.characters.join(', '));

  const handleSave = () => {
    // Aquí deberías actualizar los datos de la escena
    // Por ahora, solo navegamos de vuelta
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Scene</Text>
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
      />
      <TextInput
        style={styles.input}
        value={characters}
        onChangeText={setCharacters}
        placeholder="Characters (comma separated)"
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

export default EditSceneScreen;
