import React from 'react';
import {View,StyleSheet,KeyboardAvoidingView} from 'react-native';
import Login from './src/router/Login'



// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
     
      <View style={styles.app}>
        <Login></Login>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#52c41a",
  }
})