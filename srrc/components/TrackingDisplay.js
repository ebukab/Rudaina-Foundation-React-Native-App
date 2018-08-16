import React , {Component} from 'react'
import {View , Button} from 'react-native';
import Chart from './Chart';
import ListItemView from './ListItemView';
import ModalView from './Modal';
import PropTypes from 'prop-types';
import {Actions} from "react-native-router-flux";

class TrackingDisplay extends Component {
    constructor(props) {
        super(props);
        Actions.refresh({title: this.props.chosenItem[1]})
        this.recieveUserInput = this.recieveUserInput.bind(this);
        this.state = {
            showModal : false,
            modalVisible : false,
            buttonClicked : "",
            dataSet : this.props.chosenItem[0],
            fullDataSet : this.props.chosenItem
        };
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    updateDataSet = (newDataSet) => {
        this.setState({
            dataSet : newDataSet
        })
    }

    reset = () => {
        var newData = [[0 , "00/00/0000"]];
        this.setState({
            dataSet : newData
        })
    }

    toggleShowModal = (buttonClicked) => {
        this.setState({
            showModal : !this.state.showModal,
            modalVisible : !this.state.modalVisible,
            buttonClicked : buttonClicked
        })
    }

    recieveUserInput(userData){
        if(this.state.dataSet == [[0 , "00/00/0000"]]){
            let useData = [userData]
            this.setState({
                dataSet : useData
            })
            this.props.updateDateSet(this.props.chosenItem[4] , useData )
        }else{
            var newData = this.state.dataSet.concat([userData]);
            this.setState({
                dataSet : newData
            })
            this.props.updateDateSet(this.props.chosenItem[4] , newData )
        }
    }

    static get propTypes() { 
        return { 
            chosenItem: PropTypes.any,
            updateDateSet : PropTypes.any
        }; 
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.chartContainer}>
                    <Chart style={{height : "100%"}} dataSet={this.state.dataSet}/>
                </View>

                <View style={styles.listContainer}>
                    <ListItemView updateDataSet={this.updateDataSet} dataSet={this.state.dataSet} fullDataSet={this.state.fullDataSet}/>
                </View>

                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.toggleShowModal("new")}
                            title="ADD NEW WEEK"
                            color="#ff0000"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.toggleShowModal("reset")}
                            title="RESET"
                            color="#666666"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>

                {this.state.showModal && <ModalView fullDataSet={this.state.fullDataSet} reset={this.reset} recieveUserInput={this.recieveUserInput}  buttonClicked={this.state.buttonClicked} modalVisible={this.state.modalVisible}/>}
    
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        backgroundColor : "#d8d8d8",
        height: '100%'
    },
    chartContainer: {
        height: '40%',
    },
    listContainer: {
        borderTopColor: '#000',
        borderTopWidth: 5,
        height: '50%',
        borderBottomColor: '#000',
        borderBottomWidth: 5,
    },
    container: {
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#d8d8d8",
    },
    buttonContainer: {
        flex: 1,
        marginLeft : 5,
        marginRight : 5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
};

export default TrackingDisplay;