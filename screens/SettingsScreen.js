import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { setRest, setWork } from '../components/global';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>
            <View style={styles.top}></View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.homeButton}
                >
                <Text>Back</Text>
                </TouchableOpacity>


            <View style={styles.inputContainer}>
                <Text> Workout Time:</Text>
                <TextInput 
                placeholder='Workout Time'
                onChangeText={text => setWork(text)}
                style={styles.input}/>
                <Text>Rest Time</Text>
            <TextInput 
                placeholder='Rest Time'
                onChangeText={text => setRest(text)}
                style={styles.input}/>

            </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        marginLeft: 30,
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadios: 10,
        marginTop: 5
    },
    top:{
        paddingBottom: 50,
        backgroundColor: '#0782F9'

    },
    rowGap:{
        // display: 'flex',
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    gap: {
        // backgroundColor: 'white',
       paddingBottom: 10,
    },
    homeButton: {
        BackgroundColor: 'white',
        borderColor: '#0082F9',
        borderWidth: 5,
        marginTop: 25,
        marginLeft: 25,
        padding: 10,
        width: 70,
        borderRadius: 10,
    },
    row:{
        // display: 'flex',
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'white',
        // marginBottom: 10,
    },
    many:{
        backgroundColor: 'yellow',
        // paddingLeft: 150,
    },
    rowElement:{
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: "#EF767A",
        marginTop: 10,
        marginBottom:10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        padding: 20,
        borderRadius: 10
    },
    add: {

        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#0782F9',
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        marginRight: '10',
        marginTop: 10,
    },
    addText: {
        textAlign: 'center',
        paddingLeft: 1.5,
        fontSize: 30,
    },
    middleIMG: {
        marginLeft: 'auto',
        marginTop: 25
    },
    footer: {

        backgroundColor: '#0082F9',
        height: '17%'
    }
})