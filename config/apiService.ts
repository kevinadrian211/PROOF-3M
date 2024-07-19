// config/apiService.ts
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

// Función para obtener todas las películas
export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films`); // Actualiza la ruta a /films
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Función para agregar una película
export const addMovie = async (movie: { name: string, duration: number, description: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/films`, movie); // Actualiza la ruta a /films
    return response.data;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw error;
  }
};

// Función para actualizar una película
export const updateMovie = async (id: number, movie: { name: string, duration: number, description: string }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/films/${id}`, movie); // Actualiza la ruta a /films/{id}
    return response.data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};

// Función para eliminar una película
export const deleteMovie = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/films/${id}`); // Actualiza la ruta a /films/{id}
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error;
  }
};

// Función para obtener todas las escenas
export const getScenes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/scenes`); // Actualiza la ruta a /scenes
    return response.data;
  } catch (error) {
    console.error('Error fetching scenes:', error);
    throw error;
  }
};

// Función para agregar una escena
export const addScene = async (scene: { title: string, duration: number, characters: number[] }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/scenes`, scene); // Actualiza la ruta a /scenes
    return response.data;
  } catch (error) {
    console.error('Error adding scene:', error);
    throw error;
  }
};

// Función para actualizar una escena
export const updateScene = async (id: number, scene: { title: string, duration: number, characters: number[] }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/scenes/${id}`, scene); // Actualiza la ruta a /scenes/{id}
    return response.data;
  } catch (error) {
    console.error('Error updating scene:', error);
    throw error;
  }
};

// Función para eliminar una escena
export const deleteScene = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/scenes/${id}`); // Actualiza la ruta a /scenes/{id}
  } catch (error) {
    console.error('Error deleting scene:', error);
    throw error;
  }
};

// Función para obtener todos los personajes
export const getCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`); // Actualiza la ruta a /characters
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

// Función para agregar un personaje
export const addCharacter = async (character: { name: string, scenes: number[] }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/characters`, character); // Actualiza la ruta a /characters
    return response.data;
  } catch (error) {
    console.error('Error adding character:', error);
    throw error;
  }
};

// Función para actualizar un personaje
export const updateCharacter = async (id: number, character: { name: string, scenes: number[] }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/characters/${id}`, character); // Actualiza la ruta a /characters/{id}
    return response.data;
  } catch (error) {
    console.error('Error updating character:', error);
    throw error;
  }
};

// Función para eliminar un personaje
export const deleteCharacter = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/characters/${id}`); // Actualiza la ruta a /characters/{id}
  } catch (error) {
    console.error('Error deleting character:', error);
    throw error;
  }
};
