import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { DeleteCharacterButton } from './deletecomponents';

const CharacterScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { sceneId } = route.params;
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, [sceneId]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/characters?scene_id=${sceneId}`);
      setCharacters(response.data);
    } catch (error) {
      console.error('Error fetching characters:', error);
      Alert.alert('Error', 'An error occurred while fetching characters.');
    }
  };

  const handleCharacterDeleted = () => {
    fetchCharacters(); // Actualizar la lista de personajes después de eliminar uno
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.namec}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditCharacter', { character: item })}
            />
            <DeleteCharacterButton id={item.id} onSuccess={handleCharacterDeleted} />
          </View>
        )}
      />
      <Button
        title="Add Character"
        onPress={() => navigation.navigate('AddCharacter', { scene: { id: sceneId } })}
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

export default CharacterScreen;
