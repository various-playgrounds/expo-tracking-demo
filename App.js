import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { pushToQueue } from './src/lib/tracking';
import track from 'react-tracking';
import { Alert } from 'react-native';

@track({ name: 'App' }, {
  dispatch: (data) => {
    pushToQueue(data);
  }
})
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
          onPress={this.onPress}
          title="Click"
          color="#841584"
        />
      </View>
    );
  }

  @track((props, state) => ({
    count: state.count
  }))
  onPress = () => {
    alert('haha');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
