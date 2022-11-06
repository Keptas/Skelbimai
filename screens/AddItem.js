import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Home from '../src/Add';
import UploadScreen from '../src/UploadScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
