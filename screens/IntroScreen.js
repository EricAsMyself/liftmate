import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation ,useIsFocused } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import OswaldFont from '../assets/oswald.ttf';
import Workout from '../components/workouts'
import WorkoutTop from '../components/workoutTop'
import WorkoutRow from '../components/workoutRow'
import { setWork } from '../components/global';
import Home from '../components/Home'
import Settings from '../components/Settings'
import Search from '../components/Search'
import Onboard0 from '../components/intro/on0'
import Onboard1 from '../components/intro/on1'
import Onboard2 from '../components/intro/on2'
import Onboard3 from '../components/intro/on3'
import Onboard4 from '../components/intro/on4'


const HomeScreen = () => {    
    const navigation = useNavigation()
    const [count, setCount] = useState(0)

    const update = async () =>{
    let myGraph = {0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0, 6:0}
    await AsyncStorage.setItem('mainGraph', JSON.stringify(myGraph));
}

    const increment = () => {
        if (count < 4) {
        setCount(count + 1);}
        else {
            update()
            navigation.navigate('Home')
        }
    }
    

    return(
        <View style={styles.main}>

            <View style={styles.header}/>
            {count === 0 && (<Onboard0 onPress={increment} style={{width:'100%', height: '100%'}}/>)}
            {count === 1 && (<Onboard1 onPress={increment} style={{width:'100%', height: '100%'}}/>)}
            {count === 2 && (<Onboard2 onPress={increment} style={{width:'100%', height: '100%'}}/>)}
            {count === 3 && (<Onboard3 onPress={increment} style={{width:'100%', height: '100%'}}/>)}
            {count === 4 && (<Onboard4 onPress={increment} style={{width:'100%', height: '100%'}}/>)}
            
            
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#5AB4C7',
        height: '100%',
    },
    header: {
        paddingTop: 40,
    }

})