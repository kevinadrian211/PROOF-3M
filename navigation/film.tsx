import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { DeleteFilmButton } from './deletecomponents';

const FilmScreen = ({ navigation }: { navigation: any }) => {
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get('http://localhost:8082/films');
      setFilms(response.data);
    } catch (error) {
      console.error('Error fetching films:', error);
      Alert.alert('Error', 'An error occurred while fetching films.');
    }
  };

  const handleFilmDeleted = () => {
    fetchFilms(); // Actualizar la lista de películas después de eliminar una
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Films</Text>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.titlef}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditFilm', { film: item })}
            />
            <DeleteFilmButton id={item.id} onSuccess={handleFilmDeleted} />
            <Button
              title="View Scenes"
              onPress={() => navigation.navigate('Scene', { filmId: item.id })}
            />
          </View>
        )}
      />
      <Button
        title="Add Film"
        onPress={() => navigation.navigate('AddFilm')}
      />
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    flex: 1,
  },
});

export default FilmScreen;
