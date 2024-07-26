import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import DeleteSceneButton from '../components/deleteScene';

const SceneScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { filmId } = route.params;
  const [scenes, setScenes] = useState<any[]>([]);

  useEffect(() => {
    fetchScenes();
  }, [filmId]);

  const fetchScenes = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/scenes?film_id=${filmId}`);
      setScenes(response.data);
    } catch (error) {
      console.error('Error fetching scenes:', error);
      Alert.alert('Error', 'An error occurred while fetching scenes.');
    }
  };

  const handleSceneDeleted = () => {
    fetchScenes(); // Actualizar la lista de escenas después de eliminar una
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scenes</Text>
      <FlatList
        data={scenes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.titles}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditScene', { scene: item })}
            />
            <DeleteSceneButton id={item.id} onSuccess={handleSceneDeleted} />
            <Button
              title="View Characters"
              onPress={() => navigation.navigate('Character', { sceneId: item.id })}
            />
          </View>
        )}
      />
      <Button
        title="Add Scene"
        onPress={() => navigation.navigate('AddScene', { film: { id: filmId } })}
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

export default SceneScreen;
