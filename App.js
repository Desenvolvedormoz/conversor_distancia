import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ConevrsorDeKmParaMilha from './Components/Km';
import ConevrsorDeMilhaParaKm from './Components/Mi';

const Tab = createMaterialBottomTabNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Km/Milha' component={ConevrsorDeKmParaMilha}/>
      <Tab.Screen name='Milha/Km' component={ConevrsorDeMilhaParaKm }/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}

