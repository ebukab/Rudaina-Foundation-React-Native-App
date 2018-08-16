import React , {Component} from 'react'
import { View , Text , TouchableOpacity , Dimensions } from 'react-native';
import { MaterialCommunityIcons ,FontAwesome , Octicons} from '@expo/vector-icons';

class DrawerItems extends Component {
    state = {
        isLoggedIn : false
    }
    render() { 
        return (
            <View style={{height : Dimensions.get('window').height *.9}}>
                <View style={styles.itemContainer1}>
                    <MaterialCommunityIcons  name="home-variant" size={150} color="red" />
                </View>
    
                <View style={styles.itemContainer2}>
                    <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons  name="face-profile" size={30} color="red" />
                        </View>
                        <View>
                            <Text style={styles.text}>My Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                        <View style={styles.iconContainer}>
                            <Octicons  name="tasklist" size={30} color="red" />
                        </View>
                        <View>
                            <Text style={styles.text}>Task List</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                        <View style={styles.iconContainer}>
                            <FontAwesome  name="calendar" size={30} color="red" />
                        </View>
                        <View>
                            <Text style={styles.text}>Calender</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons  name="settings" size={30} color="red" />
                        </View>
                        <View>
                            <Text style={styles.text}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.itemContainer3}>
                    {!this.state.isLoggedIn && 
                        <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons  name="login" size={30} color="red" />
                            </View>
                            <View>
                                <Text style={styles.text}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    {this.state.isLoggedIn && 
                        <TouchableOpacity style={styles.itemContainer} onPress={this._onPressButton}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons  name="logout" size={30} color="red" />
                            </View>
                            <View>
                                <Text style={styles.text}>Log-Out</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}


const styles = {
    text: {
        color : "white",
        fontSize : 20,
        margin : 10,
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    iconContainer: {
        margin : 10,
        alignItems: 'center',
    },
    logInOutContainer: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 5,
        position: "absolute",
        bottom: 0
    },
    itemContainer1: {
        height : "30%",
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer2: {
        height : "50%",
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    itemContainer3: {
        height : "10%"
    },
};

export default DrawerItems;