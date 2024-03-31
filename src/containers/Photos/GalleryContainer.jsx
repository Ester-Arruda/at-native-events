import React, { useState, useEffect } from 'react';
import { Image, Text, StyleSheet, FlatList, Dimensions, View, ActivityIndicator } from 'react-native';
import app from '../../Firebase';
import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage';

const numColumns = 6;
const screenWidth = Dimensions.get('window').width;

export default function GalleryContainer() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPhotos() {
    try {
      const firebaseStorage = getStorage(app);
      const photoRef = ref(firebaseStorage);
      const list = await listAll(photoRef);
      const urls = [...photos];
      for (let fileRef of list.items) {
        const photoRef = ref(firebaseStorage, fileRef);
        const url = await getDownloadURL(photoRef);
        if (!urls.includes(url)) urls.push(url);
      }
      setPhotos(urls);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  const renderPhotoItem = ({ item }) => (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item }} style={styles.photo} />
    </View>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
      ) : photos.length > 0 ? (
        <FlatList
          data={photos}
          renderItem={renderPhotoItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.container}
        />
      ) : (
        <Text style={styles.noImageText}>Não há imagens no momento</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  photoContainer: {
    margin: 2,
    width: screenWidth / numColumns - 4,
    height: screenWidth / numColumns - 4,
    backgroundColor: '#ccc',
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
  noImageText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  activityIndicator: {
    marginTop: 50,
  },
});
