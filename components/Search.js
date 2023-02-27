import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { setRest, setWork, setWorkout, getPPL} from '../components/global';
import WorkoutRow from '../components/workoutRow'
import { Ionicons, AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const PPL = getPPL();

    return(
        <View style={{backgroundColor: 'E6E6EA'}}>


                <Text style={{fontSize: 30,marginLeft: 15,fontWeight: 'bold',}}>
                    Current Workout
                </Text>      
                <TouchableOpacity
                        onPress={() => setWorkout("PPL")}
                        style={styles.curentWorkout}
                        >
                        <Text>The Basics</Text>
                        <Image source={require('../assets/PPL.jpg')} style={styles.workoutImage}></Image>
                </TouchableOpacity>
                <Text style={{fontSize: 30,marginLeft: 15,fontWeight: 'bold',}}>
                    Workouts
                </Text>
                    <TouchableOpacity
                        onPress={() => setWorkout("PPL")}
                        style={styles.workout}
                        >
                        <Text>The Basics</Text>
                        <Image source={require('../assets/PPL.jpg')} style={styles.workoutImage}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => setWorkout("BODY")}
                        style={styles.workout}
                        >
                        <Text>ChatGPT</Text>
                        <Image source={require('../assets/GPT.png')} style={styles.workoutImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setWorkout("EMPTY")}
                        style={styles.workout}
                        >
                        <Text>Liver Kings</Text>
                        <Image source={require('../assets/LVK.png')} style={styles.workoutImage}></Image>
                    </TouchableOpacity>


        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    curentWorkout: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#F4F4F8',
        borderRadius: 10,
        height: 300,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        },
    workout: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#F4F4F8',
        borderRadius: 10,
        height: 145,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    workoutImage:{
        marginTop: 'auto',
        marginBottom:'auto',
        marginLeft: 'auto',
        marginRight: 10,
        borderRadius: 10,
        width: 130,
        height: 130,
    },
    
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