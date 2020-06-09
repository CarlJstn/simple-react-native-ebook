import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Header from './Header';
import BookButton from './BookButton';
import ViewBook from './ViewBook';

const BookList = () => {
  const [activeBook, setActiveBook] = useState(false);
  const [books, setBooks] = useState([
    {
      id: Math.random(),
      title: 'Book 1',
      url:
        'https://res.cloudinary.com/dxdwckvxy/raw/upload/v1591614114/sample_book_1_izukbw.txt',
    },
    {
      id: Math.random(),
      title: 'Book 2',
      url:
        'https://res.cloudinary.com/dxdwckvxy/raw/upload/v1591614115/sample_book_2_kwjcls.txt',
    },
  ]);

  const handleBookClick = (book) => {
    setActiveBook(book);
  };

  const handleBackClick = () => {
    setActiveBook(false);
  };

  return (
    <View style={styles.container}>
      <Header title={!activeBook ? 'Choose A Book' : activeBook.title} />
      {!activeBook ? (
        <FlatList
          data={books}
          renderItem={({item}) => (
            <BookButton item={item} handleBookClick={handleBookClick} />
          )}
        />
      ) : (
        <ViewBook book={activeBook} handleBackClick={handleBackClick} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default BookList;
