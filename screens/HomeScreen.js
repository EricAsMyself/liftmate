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


const HomeScreen = () => {    
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    

    const [activeComponent, setActiveComponent] = useState('Home');
    const [backgroundColor1, setBackgroundColor1] = useState('darkgray');
    const [backgroundColor2, setBackgroundColor2] = useState('transparent');
    const [backgroundColor3, setBackgroundColor3] = useState('transparent');
    const [logo1, setlogo1] = useState('white');
    const [logo2, setlogo2] = useState("gray");
    const [logo3, setlogo3] = useState("gray");

    const handleComponentChange = (componentName) => {
      setActiveComponent(componentName);
      setBackgroundColor1(componentName === 'Home' ? 'darkgray' : 'transparent');
      setBackgroundColor2(componentName === 'Search' ? 'darkgray' : 'transparent');
      setBackgroundColor3(componentName === 'Profile' ? 'darkgray' : 'transparent');

      setlogo1(componentName === 'Home' ? 'white' : 'gray');
      setlogo2(componentName === 'Search' ? 'white' : 'gray');
      setlogo3(componentName === 'Profile' ? 'white' : 'gray');
    };
    
    return(
        <View
        style={styles.main}>
            <View style={styles.top}>
            </View>
            <ScrollView style={{height: '80%'}}>

            {activeComponent === 'Home' && <Home navigation={navigation} />}
            {activeComponent === 'Search' && <Search  />}
            {activeComponent === 'Profile' && <Settings />}

            </ScrollView>
            <View style={styles.footer}>
                <View style={{flexDirection: 'row'}}>

                    <TouchableOpacity
                    style={[styles.bottomItem, { backgroundColor: backgroundColor1 }]}
                    onPress={() => handleComponentChange("Home")}>
                        <AntDesign name="home" size={55} color={logo1} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.bottomItem, { backgroundColor: backgroundColor2 }]}
                        onPress={() => handleComponentChange("Search")}>
                            <AntDesign name="search1" size={55} color={logo2} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.bottomItem, { backgroundColor: backgroundColor3 }]}
                        onPress={() => handleComponentChange("Profile")}>
                            <AntDesign name="user" size={55} color={logo3} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    bottomItem:{
        paddingHorizontal: '10%', 
        paddingVertical: '3%',
        paddingBottom: '20%'

    },
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
        // backgroundColor: '#E6E6EA',
        height: '17%'
    }
})