import { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

export function Filter({ setFilterTerm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onPress = () => {
    setFilterTerm(searchTerm);
  }

  const handleSearchChange = (text) => {
    if(text === '') {
      setFilterTerm(text);
    }
    setSearchTerm(text);
  };

  return (
    <View style={styles.alignElements}>
      <TextInput
        placeholder='Busque um evento'
        value={searchTerm}
        onChangeText={handleSearchChange}
        data-cy="search"
        style={styles.input}
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Filtrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  alignElements: {
    marginTop: 30,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: 300,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
    button: {
    backgroundColor: '#DC8FF3',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: '#350543',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})








