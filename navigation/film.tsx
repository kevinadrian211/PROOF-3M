import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Ejemplo de datos de películas
const films = [
  { title: 'Toy Story', duration: '81 min', description: 'A cowboy doll is profoundly affected by the arrival of a space ranger figure.', scenes: ['Opening Scene', 'Pizza Planet', 'Andys Room'] },
  { title: 'Toy Story 2', duration: '92 min', description: 'When Woody is stolen by a toy collector, Buzz and the rest of the toys try to rescue him.', scenes: ['Scene 1', 'Scene 2'] },
  { title: 'Toy Story 3', duration: '103 min', description: 'As Andy prepares to leave for college, his toys are delivered to a day care center.', scenes: ['Scene A', 'Scene B'] },
];

const FilmScreen = ({ navigation }: any) => {
  const handleEdit = (film: any) => {
    navigation.navigate('EditFilm', { film });
  };

  const handleDelete = (film: any) => {
    Alert.alert(
      'Delete Film',
      `Are you sure you want to delete the film ${film.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Aquí deberías eliminar la película del estado
            console.log(`Film ${film.title} deleted.`);
          },
        },
      ],
    );
  };

  const handleAdd = () => {
    navigation.navigate('AddFilm');
  };

  const handleViewScenes = (film: any) => {
    navigation.navigate('Scene', { film });
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.duration}>Duration: {item.duration}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleEdit(item)} style={styles.editButton}>
            <Text style={styles.editButtonText}>✎</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleViewScenes(item)} style={styles.viewButton}>
            <Text style={styles.viewButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toy Story Films</Text>
      <FlatList
        data={films}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Film</Text>
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

export default FilmScreen;
