import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screen/MenuScreen';
const Stack = createNativeStackNavigator();
import "./global.css"

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white',
    color: '#b80000',
    fontSize: 20,
    textAlign: 'center'
  },
})

export default App;
