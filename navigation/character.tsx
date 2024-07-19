import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define el tipo para los parámetros de la ruta
type RootStackParamList = {
  Character: { scene: { title: string } };
  AddCharacter: { scene: { title: string } };
  EditCharacter: { character: { name: string; scenes: number } };
};

type CharacterScreenRouteProp = RouteProp<RootStackParamList, 'Character'>;
type CharacterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Character'>;

type Props = {
  route: CharacterScreenRouteProp;
  navigation: CharacterScreenNavigationProp;
};

const characters = [
  { name: 'Woody', scenes: 15 },
  { name: 'Buzz Lightyear', scenes: 12 },
  { name: 'Mr. Potato Head', scenes: 7 },
  // Agrega más personajes si es necesario
];

const CharacterScreen: React.FC<Props> = ({ route, navigation }) => {
  const { scene } = route.params;

  const handleEdit = (character: any) => {
    navigation.navigate('EditCharacter', { character });
  };

  const handleDelete = (character: any) => {
    Alert.alert(
      'Delete Character',
      `Are you sure you want to delete the character ${character.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log(`Character ${character.name} deleted.`);
          },
        },
      ],
    );
  };

  const handleAddCharacter = () => {
    navigation.navigate('AddCharacter', { scene });
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.scenes}>Scenes: {item.scenes}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleEdit(item)} style={styles.editButton}>
            <Text style={styles.editButtonText}>✎</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Characters in Scene: {scene.title}</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer} // Estilo para contener el botón al final
      />
      <TouchableOpacity onPress={handleAddCharacter} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Character</Text>
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
  scenes: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
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
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 70, // Ajusta el padding para asegurar espacio para el botón
  },
});

export default CharacterScreen;
