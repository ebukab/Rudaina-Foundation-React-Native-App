import React , {Component} from 'react';
import { Text , View } from 'react-native';
import { Ionicons , MaterialCommunityIcons , MaterialIcons } from '@expo/vector-icons';

const InstructionPage = () => {
    return (
        <View>
            <View>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons  name="file-multiple" size={50} color="white" />
                </View>
                <View>
                    <View>
                        <Text>Document</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
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
        width: '30%',
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

export default InstructionPage;
