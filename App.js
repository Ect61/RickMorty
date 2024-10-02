import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screen/MenuScreen';
import ProductScreen from './src/screen/ProductScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import OrderScreen from './src/screen/OrderScreen';
import OrderSuccessScreen from './src/screen/OrderSuccessScreen ';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerStyle,
            headerShown: true,
          }} />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerStyle,
            headerShown: true,
          }} />

        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerStyle,
            headerShown: true,
            title: 'Sipariş Ver'
          }} />

        <Stack.Screen
          name="OrderSucces"
          component={OrderSuccessScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerStyle,
            headerShown: true,
            title: 'Sipariş Tamamlandı'
          }} />

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
