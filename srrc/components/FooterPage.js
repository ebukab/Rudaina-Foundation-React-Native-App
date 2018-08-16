import React , {Component}from 'react' ;
import { View , TouchableOpacity } from 'react-native';
import { Ionicons , MaterialCommunityIcons , MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

class FooterPage extends Component {
    state = {  }

    static get propTypes() { 
        return { 
            setCurrentDisplay: PropTypes.any 
        }; 
    }

    changetheCurrentDisplay = (currentDisplay) => {
        this.props.setCurrentDisplay(currentDisplay)
        //alert(currentDisplay);
    }

    render() { 
        return (
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.iconContainer} onPress={() => this.changetheCurrentDisplay("Document")}>
                    <View>
                        <MaterialCommunityIcons  name="file-multiple" size={50} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.iconContainer} onPress={() => this.changetheCurrentDisplay("Tracking")}>
                    <View>
                        <MaterialCommunityIcons  name="chart-donut-variant" size={50} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.iconContainer} onPress={() => this.changetheCurrentDisplay("Game")}>
                    <View>
                        <Ionicons  name="ios-game-controller-b" size={50} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.iconContainer} onPress={() => this.changetheCurrentDisplay("SideMenu")}>
                    <View >
                        <MaterialIcons  name="menu" size={50} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width : "100%",
        height : "100%",
        borderColor : "black"
    },
    iconContainer: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth : 1,
        borderColor : "red",
        height : "100%",
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginLeft : 5,
        marginRight : 5,
        margin : 10
    },
    buttonsContainer: {
        height: '10%',
        margin: 5,
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
    },
    textContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color : "black",
        fontSize : 17,
        textAlign : "center",
        padding : 4
    }
};


export default FooterPage;