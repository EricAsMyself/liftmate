
import { useNavigation } from '@react-navigation/core';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { auth } from '../../firebase';

const LoginScreen = ({onPress}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const navigation = useNavigation()


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user) {
                onPress()
            }
        })
        return unsubscribe
    },[])

    const handleSignUp = () =>{
        // navigation.navigate('IntroScreen')
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Reggistered with:",user.email);
            // onPress()
        })
        .catch(error => alert(error.message))
    }


    // const handLogIn = () =>{
    //     auth
    //     .signInWithEmailAndPassword(email,password )
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log("logged in with:", user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behaviour='padding'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}/>
                
                <TextInput 
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>
            </View>

            <View style={styles.buttonContainer}>
                {/* <TouchableOpacity 
                onPress={handLogIn}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> */}

                <TouchableOpacity 
                onPress={handleSignUp}
                style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F8",
        color: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadios: 10,
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#2AB7CA',
        width: '100%',
        padding: 15,
        borderRadius:10,
        alignItems: 'center'

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#2AB7CA',
        borderWidth: 2,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16

    },
    buttonOutlineText:{
        color: '#2AB7CA',
        fontWeight: '700',
        fontSize: 16
    }
})