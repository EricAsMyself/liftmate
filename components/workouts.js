import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const HomeScreen = (props) => {

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [borderColor, setBorderColor] = useState('#2AB7CA');

    const handlePress = () => {
      setBackgroundColor(backgroundColor === 'white' ? '#FED766' : 'white');
      setBorderColor(borderColor === '#2AB7CA' ? '#FED766': '#2AB7CA');
    };

    return(
        <View  style={styles.row}>
            <Text style={styles.rowElement}>{props.id}</Text>
            <Text style={styles.rowElement}>{props.target}</Text>
            <TextInput 
                placeholder={props.weight.toString()}
                keyboardType='numeric'
                style={styles.input}/>
            <TextInput 
                placeholder={props.reps.toString()}
                keyboardType='numeric'
                style={styles.input}/>


            <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor }, {borderColor}]} />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 7,
        // borderColor: '#2AB7CA',
        marginRight: 10,
    },
    row:{
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white'
    },
    rowElement:{
        flex: 1,
        textAlign: 'center',
        margin: 'auto'
    },
    input:{
        flex: 1,
        textAlign: 'center',
        backgroundColor: "lightgray",
        margin: 10,
        boarderRadius: 100
    }
})