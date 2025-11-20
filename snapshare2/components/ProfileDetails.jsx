import { Image, Text, View, StyleSheet } from 'react-native';

export default function ProfileDetails() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.avatar} />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>This is your bio or other details.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    textAlign: 'center',
  },
});