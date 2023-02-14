import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button,Image , Animated} from 'react-native';
import { useNavigation,} from '@react-navigation/core';
import { Audio } from 'expo-av';
import { getPull, getRest, getWork } from '../components/global';
// import Sound from 'react-native-sound';

// var Sound = require('react-native-sound'); 

import Workout from '../components/workouts'
import WorkoutTop from '../components/workoutTop'
import WorkoutRow from '../components/workoutRow'



  
// const data = [

//     { id: 1, weight: "DeadLift (Barbell)", content:[
//     {id: 1,target: 1, weight: 240, reps: 1},
//     {id: 2,target: 1, weight: 240, reps: 1},
//     {id: 3,target: 1, weight: 240, reps: 1},]
//     },
//     { id: 1, weight: "Let Pulldown", content:[
//     {id: 1, weight: 95, reps: 12},
//     {id: 2, weight: 90, reps: 11},
//     {id: 3, weight: 90, reps: 10},
//     {id: 4, weight: 80, reps: 10},]
//     },
//     { id: 1, weight: "Chest Supported Row", content:[
//     {id: 1, weight: 45, reps: 12},
//     {id: 2, weight: 45, reps: 11},
//     {id: 1, weight: 45, reps: 12},
//     {id: 2, weight: 45, reps: 11},]
//     },
//     { id: 1, weight: "Face pull", content:[
//     {id: 1, weight: 1, reps: 12},
//     {id: 2, weight: 100, reps: 11},
//     {id: 3, weight: 20, reps: 10},]
//     },
//     { id: 1, weight: "Hammer Curl", content:[
//     {id: 1, weight: 1, reps: 12},
//     {id: 2, weight: 100, reps: 11},
//     {id: 3, weight: 20, reps: 10},]
//     },
//     { id: 1, weight: "Bicep Curl (Dumbell)", content:[
//     {id: 1, weight: 1, reps: 12},
//     {id: 2, weight: 100, reps: 11},
//     {id: 3, weight: 20, reps: 10},]
//     }
//   ];


const HomeScreen = () => {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      setRefresh(false);
    }, [refresh]);

    let data = getPull()

    const navigation = useNavigation()

    const [datalist, setData] = useState(data)

    const [buttonText, setButtonText] = useState('Start Timer');
    const [toggleRest, setToggleRest] = useState(false)

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const day = daysOfWeek[today.getDay()];

    const [seconds, setSeconds] = useState(null);
    const toggleTimer = () => {
        if (buttonText === 'Stop Timer') {
            setButtonText('Start Timer');
            setSeconds(null)
          } else {
            setButtonText('Stop Timer');
            setSeconds(5)
            setToggleRest(false)
          }
    }

    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = React.useState();

    async function playSound() {
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/alarmEnd.mp3')
        );
        setSound(sound);
    
        // console.log('Playing Sound');
        await sound.playAsync();
      }

    useEffect(() => {
      let interval = null;
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } if (seconds ==0) {
        clearInterval(interval);
        playSound()
        setIsPlaying(true);
        if (toggleRest){
            setSeconds(getRest)
            setToggleRest(false)
        }
        else{
            setToggleRest(true)
            setSeconds(getWork);
        }  
    }
      return () => {
        clearInterval(interval);
      };
    }, [seconds]);



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
    const [currentTime, setCurrentTime] = useState(new Date());
  


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const hourDegrees = ((seconds/60)*360);

    return(
        <View>
            <View style={styles.top}>
            </View>
            <View style={styles.rowGap}>
               
                <TouchableOpacity
                title="Home"
                onPress={() => navigation.navigate('Home')}
                style={styles.homeButton}
                >
                <Text>Back</Text>
                </TouchableOpacity>
                
                <Text style={styles.middleIMG}>{day}</Text>

                <TouchableOpacity onPress={() => addSnack({id:4, weight:'new Workout', content: [{id: 6, weight: 20, reps: 10}] })} style={[styles.add]} >
    <Text style={styles.addText}>+</Text>
</TouchableOpacity>
            </View>

            <ScrollView style={{height: '74%'}}>
            {datalist.map(item => (
                <WorkoutRow id={item.id} weight={item.weight} sets={item.content} />

            ))}


            </ScrollView>
            <View style={styles.footer}>

            <Button color='black' title={buttonText} onPress={toggleTimer} />
            <Text></Text>
            {/* <Button title="End Timer" onPress={endTimer} /> */}
            {/* <Text style={styles.timer} >{seconds}</Text> */}
            
                <View style={styles.clockOuter}>
                    <View style={styles.clock} />
                    <Animated.Image
                    style={{
                        position: 'absolute',
                        width: 5,
                        height: 40,
                        justifyContent: 'center',
                        transform: [{ rotate: `${hourDegrees}deg` }]
                    }}
                    source={require('../assets/hour-hand.png')}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    homeButton: {
        BackgroundColor: 'white',
        borderColor: '#0082F9',
        borderWidth: 5,
        marginTop: 10,
        marginLeft: 10,
        padding: 10,
        width: 70,
        borderRadius: 10,
        height: 50
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
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#0782F9',
        marginRight: 10,
    },
    add:
    {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#0782F9',
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        marginRight: 10,
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
        backgroundColor: "#0782F9",
        height: "14%",
        flexDirection: 'row'
    },
    timer: {
        fontSize: 30
    },
    clockOuter: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 160,
    },
    clock: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5, 
        width: 50,
        height: 50,
        borderRadius: 100
    }
})