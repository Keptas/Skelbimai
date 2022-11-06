import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Fetch from './src/Fetch';
import Home from './src/Add';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItem from './screens/AddItem';
import AllItems from './screens/AllItems';
import Button1 from './button';
import styless from './styles';

function HomeScreen( {navigation} ) {
  return (
    <View style={styless.container}>

<Text style={styless.titleText}> Menu </Text>
<Button1 name="Prideti skelbima" color="#40E0D0" click={() => navigation.navigate('AddItem')}/>
<Button1 name="Perziureti skelbimus" color="#40E0D0" click={() => navigation.navigate('AllItems')}/>
</View> 
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "Red"
        },
        headerTintColor: "blue",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold"
        }
      }}>
      <Stack.Screen name="Home"  component={HomeScreen} />
      <Stack.Screen name="AddItem"  component={AddItem} />
      <Stack.Screen name="AllItems" component={AllItems} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
