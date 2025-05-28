import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Dashboard } from './screens/Dashboard';
import { Settings } from './screens/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const StackNavigation = (name, component) => {
  
  return ({navigation})=>(<Stack.Navigator screenOptions={{
        headerLeft: ()=>{
          return (
            <Text style={{marginHorizontal: 20}} onPress={()=>{
              return navigation.dispatch(DrawerActions.openDrawer())
            }}>☰</Text>
          )
        }
        }}>
    <Stack.Screen name={name} component={component}/>
  </Stack.Navigator>)
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown:false}}>
        <Drawer.Screen name="dashboard" component={StackNavigation("dashboard", Dashboard)} />
        <Drawer.Screen name="settings" component={StackNavigation("settings", Settings)} />
      </Drawer.Navigator>
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
