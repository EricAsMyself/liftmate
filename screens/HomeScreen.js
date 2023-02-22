import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation ,useIsFocused } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OswaldFont from '../assets/oswald.ttf';
import Workout from '../components/workouts'
import WorkoutTop from '../components/workoutTop'
import WorkoutRow from '../components/workoutRow'


const HomeScreen = () => {
    const isFocused = useIsFocused();
    const [time, setTime] = useState(0)
    const [timeString, setTimeString] = useState("Seconds")
    const workouts = 3;
    const name = "john";

    const data = {
        labels: ['Jun'],
        datasets: [
          {
            data: [43],
            color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // optional color customization
            strokeWidth: 2 // optional line width customization
          }
        ]
      };

    
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
      
    // getObjectFromAsyncStorage('myDataKey')
    // .then((myObject) => {
    //     console.log(myObject);
    // })
    // .catch((e) => {
    //     console.log(`Error: ${e}`);
    // });
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
          console.log(object);
          console.log(timeString);
        };
    
        if (isFocused) {
          fetchObject();
        }
      }, [isFocused]);


    return(
        <View
        style={styles.main}>
            <View style={styles.top}>
            </View>
            <View style={styles.rowGap}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    >
                    <Text>SignOut</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleButtonPress}
                    style={styles.button}
                    >
                    <Text>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.middleIMG}>IMG</Text>
            </View>

            <Text style={{ fontFamily: 'OswaldFont', fontSize: 40}}>Hello {name}</Text>
            <Text style={{ fontFamily: 'OswaldFont', fontSize: 24}}>Here is your workouts for today</Text>

            <ScrollView style={{height: '70%'}}>

            <View style={{ flexDirection: 'row' }}>
                    <View style={styles.homeButton}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Workout')}
                        >
                        <Text style={{ fontFamily: 'OswaldFont', fontSize: 30}}>Current Workout</Text>

                        <Text style={{ fontFamily: 'OswaldFont', fontSize: 20}}> Start Now!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: "90%"}}>
                        <View style={styles.homeButton}>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 30}}> ⏱️ </Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 20}}>Workout Time:</Text>
                            <Text>{time}</Text>
                            <Text>{timeString}</Text>
                        </View>
                        <View style={styles.homeButton}>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 30}}>Workout🔥🔥🔥</Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 40}}>{workouts}</Text>
                            <Text style={{ fontFamily: 'OswaldFont', fontSize: 20}}>Total completed workouts</Text>
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
                    {/* <View style={styles.workoutstodo}>
                        <Text>Hello</Text>
                    </View> */}
                    {/* <View style={styles.workoutstodo}>
                        <Text>Hello</Text>
                    </View> */}
                </View>


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
    main: {
        backgroundColor: "#E6E6EA",
    },
    top:{
        paddingBottom: 50,
        backgroundColor: '#F4F4F8'

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