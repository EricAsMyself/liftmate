import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';


const HomeScreen = ({onPress}) => {

    return(
        <View>
            
            <Image source={require('../../assets/onboarding/onboard1.png')} style={styles.workoutImage}/>
            <Text style={{fontSize: 50, fontWeight: 'bold' , textAlign: 'center'}}>Welcome</Text>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, marginHorizontal: 10}}>This app is designed to trach the way you work out over time.</Text>

            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold'}}>NEXT</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    main: {
        height: '100%',
    },
    workoutImage:
    {
        backgroundColor: '#EEBB55',
        padding: 100,
        borderRadius: 100,
        marginTop: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 100,
        height: 100
    },
    button: {
        marginTop: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
        width: 200,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})