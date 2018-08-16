import React, {Component} from 'react';
import {Modal, Text , View , Button , TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons , MaterialIcons } from '@expo/vector-icons';

class ModalView extends Component {
    state = {
        modalVisible: this.props.modalVisible,
        buttonClicked : this.props.buttonClicked,
        text: String(this.props.text)
    };
    
    setModalVisible() {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    inputEntered = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy;
        if(this.state.text > 0 ){
            let newInput = [Number(this.state.text) , today ]
            this.props.recieveUserInput(newInput);
        }
        this.setModalVisible()
    }

    reset = () => {
        this.props.reset();
        this.setModalVisible();
    }

    update = () => {
        this.props.updateItem( this.state.text);
        this.setModalVisible();
    }

    delete = () => {
        this.props.deleteItem(this.props.text);
        this.setModalVisible();
    }

    static get propTypes() { 
        return { 
            modalVisible: PropTypes.any ,
            buttonClicked: PropTypes.any,
            recieveUserInput : PropTypes.any,
            reset : PropTypes.any,
            text : PropTypes.any,
            updateItem : PropTypes.any,
            deleteItem : PropTypes.any,
            fullDataSet : PropTypes.any
        }; 
    }
    
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.mainContainer}>
                        <View >
                            <View style={styles.iconContainer}>
                                {(this.props.fullDataSet[1]=="Weight" || this.props.fullDataSet[1]=="Circumfrence") && <MaterialCommunityIcons  name="human-pregnant" size={150} color="red" />}
                                {this.props.fullDataSet[1]=="Nutrition" && <MaterialIcons  name="local-dining" size={150} color="red" />}
                                {this.props.fullDataSet[1]=="Exercise" && <MaterialIcons  name="fitness-center" size={150} color="red" />}
                                {this.props.fullDataSet[1]=="Sleep" && <MaterialIcons  name="local-hotel" size={150} color="red" />}
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{this.state.buttonClicked === "reset" ? "Are you sure youu want to reset?" : this.props.fullDataSet[3]}</Text>
                            </View>

                                {this.state.buttonClicked === "edit" && 
                                <View>
                                    <View>
                                        <TextInput
                                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                            onChangeText={(text) => this.setState({text})}
                                            value={this.state.text}
                                            keyboardType = 'numeric'
                                        />
                                    </View>
                                    <View style={styles.container}>
                                        <View style={styles.buttonContainer}>
                                            <Button
                                                onPress={this.update}
                                                title="UPDATE"
                                                color="#ff0000"
                                                accessibilityLabel="Learn more about this purple button"
                                            />
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Button
                                                onPress={this.delete}
                                                title="DELETE"
                                                color="#666666"
                                                accessibilityLabel="Learn more about this purple button"
                                            />
                                        </View>
                                    </View>
                                </View>}

                                {this.state.buttonClicked === "new" && <View>
                                    <View>
                                        <TextInput
                                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                            onChangeText={(text) => this.setState({text})}
                                            value={!this.state.text && this.state.text}
                                            keyboardType = 'numeric'
                                        />
                                    </View>
                                    <View style={styles.container}>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={this.inputEntered}
                                            title="ADD"
                                            color="#ff0000"
                                            accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}
                                            title="CANCEL"
                                            color="#666666"
                                            accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                </View>
                                </View>}

                                {this.state.buttonClicked === "reset" && <View style={styles.container}>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={this.reset}
                                            title="YES"
                                            color="#ff0000"
                                            accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}
                                            title="NO"
                                            color="#666666"
                                            accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                </View>}
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300/2,
        borderWidth : 3,
        borderColor : "grey"
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

export default ModalView;