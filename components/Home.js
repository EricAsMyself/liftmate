import React, {useState, useEffect, useMemo} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation ,useIsFocused , useFocusEffect} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import OswaldFont from '../assets/oswald.ttf';
import Workout from '../components/workouts'
import WorkoutTop from '../components/workoutTop'
import WorkoutRow from '../components/workoutRow'
import { setWork } from '../components/global';



import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'OswaldFont': require('../assets/oswald.ttf'),
  });
}

loadFonts();

const HomeScreen = ({ navigation}) => {
    const isFocused = useIsFocused();
    const [time, setTime] = useState(0)
    const [timeString, setTimeString] = useState("Seconds")
    const [workouts, setWorkouts] = useState(0)
    const name = "John";


    
    // const navigation = useNavigation()
    const [datalist, setDatalist] = useState(data)

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
    
    const [myGraph, setMyGraph] = useState({0: 10, 1: 11, 2:10, 3:11, 4:10, 5:11, 6:10})
    const getObjectFromAsyncStorage = async (key) => {
        try {
          const objectString = await AsyncStorage.getItem(key);
          const object = JSON.parse(objectString);
          return object;
        } catch (e) {
          console.log(`Error retrieving object from AsyncStorage: ${e}`);
          throw e;
        }
      };
    

  const [data, setData] = useState({
    labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [0,0,0,0,0,0,0],
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
        strokeWidth: 2
      }
    ]
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // let myGraph = {0: 0, 1: 1, 2:10, 3:0, 4:0, 5:0, 6:0}
  //     // await AsyncStorage.setItem('mainGraph', JSON.stringify(myGraph));
  //     const myGraphData = await getObjectFromAsyncStorage('mainGraph');
  //     setMyGraph(myGraphData);
  //     console.log(myGraphData)
  //     setData({
  //       labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
  //       datasets: [
  //         {
  //           data: [myGraphData["0"],myGraphData["1"],myGraphData["2"],myGraphData["3"],myGraphData["4"],myGraphData["5"],myGraphData["6"]],
  //           color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
  //           strokeWidth: 2
  //         }
  //       ]
  //     })
  //   };
  //   fetchData();
  // }, [navigation]);

    // const data = useMemo(() => ({
    //   labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    //   datasets: [
    //     {
    //       data: [myGraph[0], myGraph[1], myGraph[2], myGraph[3], myGraph[4], myGraph[5], myGraph[6]],
    //       color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
    //       strokeWidth: 2
    //     }
    //   ]
    // }), [myGraph]);


    useEffect(() => {
      const fetchGraphStuff = async () => {
      const myGraphData = await getObjectFromAsyncStorage('mainGraph');
      setMyGraph(myGraphData);
      console.log(myGraphData)
      setData({
        labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [myGraphData["0"],myGraphData["1"],myGraphData["2"],myGraphData["3"],myGraphData["4"],myGraphData["5"],myGraphData["6"]],
            color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
            strokeWidth: 2
          }
        ]
      })
      };
  
      if (isFocused) {
        fetchGraphStuff();
      }
    }, [isFocused]);



    
    const [myObject, setMyObject] = useState(null);

    const handleButtonPress = async () => {
      const object = await getObjectFromAsyncStorage('myDataKey');
      setMyObject(object);
      console.log(object)
    };

    useEffect(() => {
        const fetchObject = async () => {
          const object = await getObjectFromAsyncStorage('Time');
          if (object > 86400) {
            setTime(Math.round(object / 86400));
            setTimeString('Days');
          } else if (object > 3600) {
            setTime(Math.round(object / 3600));
            setTimeString('Hours');
          } else if (object > 60) {
            setTime(Math.round(object / 60));
            setTimeString('Minutes');
          } else if (object > -1) {
            setTime(Math.round(object / 1));
            setTimeString('Seconds');
          }
        //   console.log(object);
        //   console.log(timeString);
        };
    
        if (isFocused) {
          fetchObject();
        }
      }, [isFocused]);


      useEffect(() => {
        const fetchObject = async () => {
          const counter = await getObjectFromAsyncStorage('Counter');
            setWorkouts(counter)
        };

        if (isFocused) {
          fetchObject();
        }
      }, [isFocused]);


    return(
        <View
        style={styles.main}>
            <Text style={{ fontFamily: 'OswaldFont', fontSize: 40, marginLeft:'3%'}}>Hello {name}</Text>
            <Text style={{ fontFamily: 'OswaldFont', fontSize: 24, marginLeft:'3%'}}>Here is your workouts for today</Text>

            <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                        style={styles.homeButton}
                        onPress={() => navigation.navigate('Workout')}
                        >
                        <Text style={{ fontFamily: 'OswaldFont', fontSize: 30, textAlign: 'center'}}>Current Workout</Text>

                        <Text style={{ fontFamily: 'OswaldFont', fontSize: 20, textAlign: 'center'}}> Start Now!</Text>
                        </TouchableOpacity>


                    <View style={{width: "90%"}}>
                        <View style={styles.homeButton}>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 30, textAlign: 'center'}}> ⏱️ </Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 20, textAlign: 'center'}}>Workout Time:</Text>
                            <Text style={{textAlign: 'center'}}>{time}</Text>
                            <Text style={{textAlign: 'center'}}>{timeString}</Text>
                        </View>
                        <View style={styles.homeButton}>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 30, textAlign: 'center'}}>Workout🔥🔥🔥</Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 40, textAlign: 'center'}}>{workouts}</Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 20, textAlign: 'center'}}>Total completed workouts</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flexDirection: 'row' }}>
                <View>
                    <LineChart
                        data={data}
                        width={400}
                        height={200}
                        
                        chartConfig={{
                        backgroundColor: '#FE4A49',
                        backgroundGradientFrom: '#FE4A49',
                        backgroundGradientTo: '#FED766',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional color customization
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional label color customization
                        style: {
                            borderRadius: 16,

                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#FED766'
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginHorizontal: 5,

                        }}
                    />
                    </View>
                </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    main: {
        backgroundColor: "#E6E6EA",
    },
    top:{
        paddingBottom: 50,
        backgroundColor: '#E6E6EA'

    },
    workoutstodo:{
        backgroundColor: "#2AB7CA",
        margin: "4%",
        height: "80%",
        width: "50%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowGap:{
        // display: 'flex',
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#F4F4F8',
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
        backgroundColor: '#F4F4F8',
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
        borderColor: '#2AB7CA',
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
        backgroundColor: '#F4F4F8',
        // borderColor: '#2AB7CA',
        // borderWidth: 5,
        marginTop: 10,
        marginBottom:10,
        marginLeft: 10,
        marginRight: 10,
        width: '45%',
        padding: 10,
        borderRadius: 30,

        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    add: {

        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#2AB7CA',
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
        backgroundColor: '#E6E6EA',
        height: '17%'
    }
})