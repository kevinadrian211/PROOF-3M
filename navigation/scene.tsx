import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Ejemplo de datos de escenas
const scenes = [
  { title: 'Opening Scene', duration: '5 min', characters: ['Woody', 'Buzz Lightyear'] },
  { title: 'Pizza Planet', duration: '8 min', characters: ['Buzz Lightyear', 'Alien'] },
  { title: 'Andys Room', duration: '10 min', characters: ['Woody', 'Buzz Lightyear', 'Mr. Potato Head'] },
];

const SceneScreen = ({ route, navigation }: any) => {
  const { film } = route.params;
  const filteredScenes = scenes.filter(scene =>
    film.scenes.includes(scene.title)
  );

  const handleEdit = (scene: any) => {
    navigation.navigate('EditScene', { scene });
  };

  const handleDelete = (scene: any) => {
    Alert.alert(
      'Delete Scene',
      `Are you sure you want to delete the scene ${scene.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Aquí deberías eliminar la escena del estado
            console.log(`Scene ${scene.title} deleted.`);
          },
        },
      ],
    );
  };

  const handleAdd = () => {
    navigation.navigate('AddScene', { film });
  };

  const handleViewCharacters = (scene: any) => {
    navigation.navigate('Character', { scene });
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>Characters: {item.characters.join(', ')}</Text>
        <Text style={styles.duration}>Duration: {item.duration}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleEdit(item)} style={styles.editButton}>
            <Text style={styles.editButtonText}>✎</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleViewCharacters(item)} style={styles.viewButton}>
            <Text style={styles.viewButtonText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scenes in {film.title}</Text>
      <FlatList
        data={filteredScenes}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Scene</Text>
      </TouchableOpacity>
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
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  duration: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#ffcc00',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#ff6666',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  viewButton: {
    backgroundColor: '#4caf50',
    padding: 8,
    borderRadius: 4,
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SceneScreen;
