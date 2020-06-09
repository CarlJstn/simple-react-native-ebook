import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ViewBook = ({book, handleBackClick}) => {
  const [text, setText] = useState(false);

  fetch(book.url)
    .then((r) => r.text())
    .then((url) => {
      setText(url);
    })
    .catch((err) => setText(err));
  return (
    <>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => handleBackClick()}>
        <Text style={styles.backButtonText} onPress={() => handleBackClick()}>
          Back
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.text}>
          {!text ? <Text>Loading...</Text> : <Text>{text}</Text>}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 120,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 20 / 5,
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    padding: 20,
    paddingBottom: 120,
  },
});

export default ViewBook;
