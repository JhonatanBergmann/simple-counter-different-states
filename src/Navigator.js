import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import Counters from './components/Counters'

import { Provider } from 'react-redux'
import configStore from './store/storeConfig'
const store = configStore()

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#F2F3F5' }
          }}>
          <Stack.Screen
            name='Counters'
            component={Counters}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}