import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 5,
  },
  cover: {
    flex: 1,
    height: 150,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  info: {
    flex: 3,    
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 10,
  },
  data: {
    textAlign: 'left',   
  },
  author: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'left',
  },
  date: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'left',
   
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    
    
  },
});

const ItemsPage = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Details', {title: props.title, author: props.author, date: props.date})}>
    <View style={styles.bookItem}>
      <Image style={styles.cover} source={{ uri: props.coverURL }} />
      <View style={styles.info}>        
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.data}>        
        <Text style={styles.author}>{props.author}</Text>
        <Text style={styles.date}>
        <Ionicons name="md-calendar" size={16} color="grey" /> {props.date}</Text>        
      </View>
      </View>   
    </View>
    </TouchableOpacity>
  );
};

ItemsPage.propTypes = {
  coverURL: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withNavigation(ItemsPage);