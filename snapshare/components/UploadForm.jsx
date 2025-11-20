import { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../api/api';

export default function UploadForm() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const handleUpload = async () => {
    if (image && caption) {
      await uploadImage({ uri: image, caption });
      setImage(null);
      setCaption('');
    }
  };

  return (
    <View style={styles.form}>
      <Button title="Pick Image" onPress={pickImage} />
      <TextInput placeholder="Caption" value={caption} onChangeText={setCaption} style={styles.input} />
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
  },
});