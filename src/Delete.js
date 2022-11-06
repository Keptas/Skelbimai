import {View, Text, Flatlist, StyleSheet, Pressable, FlatList, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect } from 'react'
import { firebase } from '../config';

export function deleteProduct(food, deleteComplete) {
    console.log(food);
  
    firebase.firestore()
      .collection('todo')
      .doc(food.id).delete()
      .then(() => deleteComplete())
      .catch((error) => console.log(error));
  }

  return deleteProduct