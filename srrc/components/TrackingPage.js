import React, {Component} from 'react';
import { View , Text  , TouchableOpacity , Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import {Actions} from "react-native-router-flux";
import { /*Ionicons , FontAwesome ,*/ MaterialCommunityIcons } from '@expo/vector-icons';

class TrackingPage extends Component {
    ScreenHeight = Dimensions.get("window").height;

    weight = [[[0 , "00/00/0000"]] , "Weight" , "Ibs" , "Please enter your Weight in Ibs " , 0];
    circumfrence = [[[0 , "00/00/0000"]] , "Circumfrence" , "cm" , "Please enter your Circumfrence in centimeters " , 1];
    nutrition = [[[0 , "00/00/0000"]] , "Nutrition" , "meals" , "Please enter the number of meals you eat per day" , 2];
    exercise = [[[0 , "00/00/0000"]] , "Exercise" , "workouts" , "Please enter how many times you exercise per week" , 3];
    sleep = [[[0 , "00/00/0000"]] , "Sleep" , "hours" , "Please enter an estimate of how many hours you sleep per day " , 4];
    allItems = [this.weight , this.circumfrence , this.nutrition , this.exercise , this.sleep ]

    navigateToDisplay = (i , /*event*/) => {
        Actions.TrackingDisplay({chosenItem : this.allItems[i] , updateDateSet : this.updateDateSet})
    }

    updateDateSet = (num , newData) => {
        this.allItems[num][0] = newData;
    }

    render() {

        const list = [
            {
                title: 'Weight',
                icon : 'pregnant-woman'
            },
            {
                title: 'Circumfrence',
                icon: 'pregnant-woman'
            },
            {
                title: 'Nutrition',
                icon: 'local-dining'
            },
            {
                title: 'Exercise',
                icon: 'fitness-center'
            },
            {
                title: 'Sleep',
                icon: 'local-hotel'
            }
        ]

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons  name="chart-donut-variant" size={200} color="red" />
                    </View>
                </View>
                
                <View style={styles.bootomContainer}>
                    {
                        list.map((item, i) => (
                            <TouchableOpacity style={styles.itemContainer} key={i}  onPress={this.navigateToDisplay.bind(this , i)}>
                                <ListItem
                                    style={styles.text}
                                    key={i}
                                    title={item.title}
                                    leftIcon={{ name: item.icon , size : 40 , color : "red"}}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> Here you can keep track of your weekly progress .</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor : "#d8d8d8",
        height: '100%'
    },
    topContainer: {
        height: '40%',
        borderBottomColor: '#000',
        borderBottomWidth: 5,
    },
    textContainer: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color : "black",
        fontSize : 17,
        textAlign : "center",
        padding : 4
    },
    iconContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    itemContainer: {
        height: '20%'
    },
    bootomContainer: {
        height: '50%',
    },
    listContainer: {
        paddingTop: 22,
        height : 300,
        backgroundColor : "#0000ff",
        marginTop : 1,
        marginBottom : 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
};

export default TrackingPage;