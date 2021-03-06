import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import { FontAwesome } from '@expo/vector-icons'

const Hello = ({ navigation }) => {
  return (
    <View style={styles.item}>
      <Text>Hello!</Text>

      {/* For StackNavigator */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Goodbye')}>
        <Text>Say Goodbye</Text>
      </TouchableOpacity>

      {/* For DrawerNavigator */}
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const Goodbye = ({ navigation }) => {
  return (
    <View style={styles.item}>
      <Text>Goodbye!</Text>

      {/* For DrawerNavigator */}
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const Drawer = createDrawerNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  }
})

const Stack = createStackNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: {
      title: 'Hello'
    }
  },
  Goodbye: {
    screen: Goodbye,
    navigationOptions: {
      title: 'Goodbye',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  }
})

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='handshake-o' size={30} color='black' />
    }
  },
  Goodbye: {
    screen: Goodbye,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='hand-peace-o' size={30} color='black' />
    }
  },
})

// Required by React Navigation v3
//const AppContainer = createAppContainer(Tabs)
//const AppContainer = createAppContainer(Stack)
const AppContainer = createAppContainer(Drawer)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}}></View>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})