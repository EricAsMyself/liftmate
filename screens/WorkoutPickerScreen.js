import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { setRest, setWork, setWorkout, getPPL} from '../components/global';
import WorkoutRow from '../components/workoutRow'

const HomeScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const PPL = getPPL();

    return(
        <View>
            <View style={styles.top}></View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.homeButton}
                >
                <Text>Back</Text>
                </TouchableOpacity>

            <ScrollView style={{height: '70%'}}>
                
                <Text>
                    Here you can pick out the workout that you want to do.
                </Text>
                    <TouchableOpacity
                        onPress={() => setWorkout("PPL")}
                        style={styles.button}
                        >
                        <Text>PPL</Text>
                    </TouchableOpacity>
                    <ScrollView horizontal>
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => setWorkout("BODY")}
                        style={styles.button}
                        >
                        <Text>Full Body</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setWorkout("EMPTY")}
                        style={styles.button}
                        >
                        <Text>Different Parts</Text>
                    </TouchableOpacity>

            </ScrollView>
            <View style={styles.footer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../assets/profile.png')} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('WrkPck')}>
                        <Image source={require('../assets/weight.png')} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}>
                        <Image source={require('../assets/settings.png')} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                </View>
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
        BackgroundColor: 'white',
        borderColor: '#0082F9',
        borderWidth: 5,
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
    },
    workoutformat: {
        backgroundColor: 'gray',
        borderRadius: 15,
        height: 440,
        width: 400,
    }
})