import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com/images';

// Fetch all images
export async function fetchImages() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// Upload a new image with caption
export async function uploadImage({ uri, caption }) {
  const formData = new FormData();
  formData.append('image', {
    uri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  });
  formData.append('caption', caption);

  try {
    await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}