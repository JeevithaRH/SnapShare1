import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import { fetchImages } from '../api/api';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((img, index) => (
        <ImageCard key={index} image={img} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
  },
});