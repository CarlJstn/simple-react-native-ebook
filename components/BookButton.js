import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const BookButton = ({item, handleBookClick}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleBookClick(item)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 18,
  },
});

export default BookButton;
