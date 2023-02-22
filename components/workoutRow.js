import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import WorkoutTop from './workoutTop'
import Workout from './workouts'
import { setWork } from './global';

const WorkoutRow = (props) => {

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [workout, setWorkout] = useState(props.sets)

    const handlePress = () => {
      setBackgroundColor(backgroundColor === 'white' ? '#0782F9' : 'white');
    };
    const addWeight = (newObj) => {
        const lastItemId = workout.slice(-1)[0].id;
        const newId = lastItemId + 1;
        const newWorkout = [...workout, { id: newId, count: newId, ...newObj }];
        setWorkout(newWorkout);
      };

    return(
                <View>
                    <View key={props.id}  style={styles.row}>
                        <Text  style={styles.rowElement} >{props.weight}</Text>
                        <Text style={styles.rowElement}></Text>
                        </View>
                        <View>
                            <WorkoutTop weight={"Weight"} reps={"Reps"} target={"Target"} id={"Count"}/>
                        </View>
                        <View>
                            {workout.map(innerItem => (
                                <View>
                                    <Workout id={innerItem.id} target={innerItem.target} weight={innerItem.weight} reps={innerItem.reps}/>
                                </View>
                            ))}
                        </View>
                        <TouchableOpacity onPress={() => addWeight({target: 1, weight: 20, reps: 10})} style={{backgroundColor:'white', padding: 10}} >
                            <Text> Add weight</Text>
                        </TouchableOpacity>
                        <View style={styles.gap}>
                    </View>
                </View>
    )
}

export default WorkoutRow


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
})