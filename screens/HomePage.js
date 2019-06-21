import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ItemsPage from './ItemsPage';
import config from '../config';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
  },
  listContent: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center',
  },
});


class HomePage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    fetch(`http://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${config.ny_times_api_key}`)
      .then(response => response.json())
      .then((rjson) => {
        console.log(rjson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rjson.results),
        });
      }
    )
    .catch((error) => {
      console.warn(error);
    });
  }
  

  renderFooter() {
    return (
      <View style={styles.sectionDivider}>
        <Text>Data from the New York Times Most Viewed Articles</Text>
      </View>);
  }

  renderRow(rowData) {
    return (
      <ItemsPage
        style={{ marginTop: 10 }}        
        coverURL = {rowData.media[0]['media-metadata'][0].url}
        title={rowData.title}
        date={rowData.published_date}
        author={rowData.byline}       
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}    
        renderFooter={this.renderFooter}
      />
    );
  }
}

export default HomePage;