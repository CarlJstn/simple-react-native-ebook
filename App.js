import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BookList from './components/BookList';

const App = () => {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
