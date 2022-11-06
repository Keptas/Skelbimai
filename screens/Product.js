import {View, Text, Flatlist, StyleSheet, Pressable, FlatList } from 'react-native'
import React, {useState, useEffect } from 'react'
import { firebase } from '../config';

const Fetch = () => {

    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('todo');

    useEffect(() => {
        todoRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const { name, text, price} = doc.data()
                    users.push({
                        id: doc.id,
                        name,
                        text,
                        price,
                       
                    })
                })
                setUsers(users)
            }
        )
    }, [])
    
    
    

    return (
        <View style={{ flex:1, marginTop:100}}>
           <FlatList
                style={{height:'100%'}}
                data={users}
                numCoumns={1}
                renderItem={({item}) => (
                    <Pressable
                        style={styles.container}
                        >
                            <View style={StyleSheet.innerContainer}>
                                <Text style={styles.itemHeading}>Pavadinimas</Text>
                                <Text style={styles.itemText}>{item.name}</Text>
                                <Text style={styles.itemHeading}>Aprasymas</Text>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <Text style={styles.itemHeading}>Kaina: {'\n'}{item.price} Eur</Text>
                                onPress={()=> navigation.navigate("Product", {Produktas : item.name})}
                            </View>
                        </Pressable>
                )}
            />
        </View>
    )
}

export default Fetch

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e5e5e5',
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,
    },
    innerContainer:{
        alignItems:'center',
        flexDirection:'column',
    },
    itemHeading:{
        fontWeight:'bold'

    },
    itemText:{
        fontWeight:'300'

    }




})