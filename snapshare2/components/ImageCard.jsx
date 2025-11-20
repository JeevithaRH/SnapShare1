import { Image, Text, View, StyleSheet } from 'react-native';

export default function ImageCard({ image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <Text style={styles.caption}>{image.caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 10,
    fontSize: 16,
  },
});