import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, TextInput, Image} from 'react-native';


const HomeScreen = ({onPress}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("")
    const changeFname = () => {}
    const changeLname = () => {}


    return(
        <View>
            
            <Image source={require('../../assets/onboarding/onboard3.png')} style={styles.workoutImage}/>
            <Text style={{fontSize: 40, fontWeight: 'bold' , textAlign: 'center'}}>What Should We Call You?</Text>
            {/* <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, marginHorizontal: 10}}>This app is designed to trach the way you work out over time.</Text> */}

            <View style={styles.containter}>
                <View style={{flexDirection: 'row',}}>
                    <TextInput style={styles.inputs}>

                    </TextInput>

                    <TouchableOpacity onPress={changeFname} style={styles.button2}>
                        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>First name</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                    
                    <TextInput style={styles.inputs}>

                    </TextInput>

                    <TouchableOpacity onPress={changeLname} style={styles.button2}>
                        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>Last name</Text>
                    </TouchableOpacity>
                </View>

            </View>

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
        
    },
    button2: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    containers: {
        // width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        

    },
    inputs: {
        width: '60%',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'lightgray',
    }
})