import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Workout from '../components/workouts'
import WorkoutTop from '../components/workoutTop'
import WorkoutRow from '../components/workoutRow'


const data = [

    { id: 1, weight: "DeadLift (Barbell)", content:[
    {id: 1,target: 1, weight: 240, reps: 1},
    {id: 2,target: 1, weight: 240, reps: 1},
    {id: 3,target: 1, weight: 240, reps: 1},]
    },
    { id: 1, weight: "Let Pulldown", content:[
    {id: 1, weight: 95, reps: 12},
    {id: 2, weight: 90, reps: 11},
    {id: 3, weight: 90, reps: 10},
    {id: 4, weight: 80, reps: 10},]
    },
    { id: 1, weight: "Chest Supported Row", content:[
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},
    {id: 1, weight: 45, reps: 12},
    {id: 2, weight: 45, reps: 11},]
    },
    { id: 1, weight: "Face pull", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Hammer Curl", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    },
    { id: 1, weight: "Bicep Curl (Dumbell)", content:[
    {id: 1, weight: 1, reps: 12},
    {id: 2, weight: 100, reps: 11},
    {id: 3, weight: 20, reps: 10},]
    }
  ];


const HomeScreen = () => {
    const navigation = useNavigation()
    const [datalist, setData] = useState(data)

    const addSnack = (addedFood) => {
        setData([ ...datalist,  addedFood]);
      };
    const addSet = (addedFood) => {
        setData([ ...datalist,  addedFood]);
    };

    const [backgroundColor, setBackgroundColor] = useState('white');

    const handlePress = () => {
      setBackgroundColor(backgroundColor === 'white' ? '#0782F9' : 'white');
    };

    return(
        <View>
            <View style={styles.top}>
            </View>
            <View style={styles.rowGap}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Workout')}
                    style={styles.button}
                    >
                    <Text>SignOut</Text>
                </TouchableOpacity>
                <Text style={styles.middleIMG}>IMG</Text>
            </View>
            <ScrollView style={{height: '70%'}}>

            <View style={styles.homeButton}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Workout')}
                >
                <Text>Todays workout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.homeButton}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                >
                <Text>Settings</Text>
                </TouchableOpacity>
            </View>


            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.homeButton}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('WrkPck')}
                    >
                    <Text>Pick Workout</Text>
                    
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
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
        marginTop: 5,
        marginRight: 5,
        marginLeft: 10,
        marginBottom:5,
        width: 100,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10
    },
    homeButton: {
        backgroundColor: 'white',
        borderColor: '#0082F9',
        borderWidth: 5,
        marginTop: 10,
        marginBottom:10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
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