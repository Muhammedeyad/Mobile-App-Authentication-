import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Dashboard } from './screens/Dashboard';
import { Settings } from './screens/Settings';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomDrawer } from './screens/CustomDrawer';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigation = ()=>{
  return (
    <Drawer.Navigator drawerContent={(props)=> <CustomDrawer {...props}/>} >
          <Drawer.Screen name='dashboard' component={Dashboard}/>
          <Drawer.Screen name='settings' component={Settings}/>
          <Drawer.Screen name="register" component={StackNavigation}/>
        </Drawer.Navigator>
  )
}

const StackNavigation = ()=>{
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
          <Stack.Screen name='register' component={RegisterScreen}/>
          <Stack.Screen name='login' component={LoginScreen}/>
          <Stack.Screen name='dashboard' component={DrawerNavigation}/>
        </Stack.Navigator>
  )
}

export default function App() {
  const [isAuth, setIsAuth] = useState()
  useEffect(() => {
    async function gettingAuthUser() {
      const data = await AsyncStorage.getItem("authUser")
      if (data == "" || null) {
        setIsAuth(false)
        return
      }
      setIsAuth(data)
    }
    gettingAuthUser()
  }, [])
  return (
    <NavigationContainer>
      { !isAuth ? <StackNavigation/> : <DrawerNavigation/> }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
