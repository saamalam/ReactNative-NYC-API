import React from 'react';
import { TouchableOpacity, Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomePage from '../screens/HomePage';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const style = StyleSheet.create({
  detailPage: {
    flex: 1,    
    padding: 5,
    
  }, 
  author: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'left',
    marginBottom: 10,

  },
  date: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'left',   
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
  },
  drawer: {
    marginLeft: 10,
    padding: 0,
  },
  search: {
    marginRight: 10,
    padding: 0,
  },
});
class HomeScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: 'NY Times Most Popular',
    headerLeft: <Ionicons style={style.drawer} name="md-menu" size={24} color="black" />,
    headerRight: <Ionicons style={style.search} name="md-search" size={24} color="black" />,
  });

  render() {
    return (
      <HomePage/>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'No Title');
    const author = navigation.getParam('author', 'No Author');
    const date = navigation.getParam('date', 'No Date');

    return (
      <ScrollView>
      <View style={style.detailPage}>        
        <Text style={style.title}>{title}</Text>
        <Text style={style.author}>{author}</Text>
        <Text style={style.date}>
        <Ionicons name="md-calendar" size={16} color="grey" /> {date}</Text>
        <Text style={style.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={style.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={style.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={style.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
      </ScrollView>
    );
  }
}




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}