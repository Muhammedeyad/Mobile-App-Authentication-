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

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const StackNavigation = (name, component, hshown) => {
  const headershown =hshown == undefined?  true : false 
  
  return ({ navigation }) => (<Stack.Navigator screenOptions={{
    headerShown:headershown ,
    headerLeft: () => {
      return (
        <Text style={{ paddingVertical: 10, paddingHorizontal: 20, }} onPress={() => {
          return navigation.dispatch(DrawerActions.openDrawer())
        }}>☰</Text>
      )
    }
  }}>
    <Stack.Screen name={name} component={component} />
  </Stack.Navigator>)
}

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
        <Drawer.Screen name='register' component={StackNavigation("register", RegisterScreen, false)} />
        <Drawer.Screen name='login' component={StackNavigation("login", LoginScreen, false)} />
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
