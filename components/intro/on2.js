import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput, Image, Slider} from 'react-native';
import { useNavigation } from '@react-navigation/core';


const HomeScreen = ({onPress}) => {
    const [sliderValue, setSliderValue] = useState(20.5)

    const valueChange = (value) => {
        setSliderValue(value)
    }

    return(
        <View>
            
            <Image source={require('../../assets/onboarding/onboard2.png')} style={styles.workoutImage}/>
            <Text style={{fontSize: 50, fontWeight: 'bold' , textAlign: 'center', marginBottom: '10%'}}>What Level are You?</Text>
            {/* <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, marginHorizontal: 10}}>This app is designed to trach the way you work out over time.</Text> */}
            
            {sliderValue >= 1 && sliderValue <= 10 && (<Text style={{marginLeft: 30, marginRight: 'auto', fontSize: 25, color: '#ADF6B1'}}>Beginner</Text>)}
            {sliderValue >= 11 && sliderValue <= 20 && (<Text style={{marginLeft: 'auto', marginRight: 'auto',paddingRight: 100, fontSize: 25, color: '#FFC482'}}>Some Knowledge</Text>)}
            {sliderValue >= 21 && sliderValue <= 30 && (<Text style={{marginLeft: 'auto', marginRight: 'auto',paddingLeft: 100, fontSize: 25, color: '#BF4E30'}}>Intermediate</Text>)}
            {sliderValue >= 31 && sliderValue <= 40 && (<Text style={{marginLeft: 'auto', marginRight: 30, fontSize: 25, color: '#D64550'}}>Advanced</Text>)}
            <Slider style={styles.slider}
                    value={sliderValue}
                    minimumValue={1}
                    maximumValue={40}
                    step={1}
                    onValueChange={valueChange}></Slider>


            {sliderValue === 20.5 && (<View style={styles.buttonNone}>
                                            <Text style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold', color: 'gray'}}>Next</Text>
                                      </View>)}

            {sliderValue !== 20.5 && (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold'}}>NEXT</Text>
            </TouchableOpacity>)}

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
        backgroundColor: '#EB5951',
        padding: 100,
        borderRadius: 100,
        marginTop: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 100,
        height: 100
    },
    slider: {
        marginTop: '10%',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        
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
        
    },
    buttonNone: {
        marginTop: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'lightgray',
        width: 200,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
})