import React , {Component} from 'react';
import { View , Text , FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ModalView from './Modal';

class ListItemView extends Component {
    state = {
        showModal : false,
        buttonClicked : "edit",
        toBeEdited : "",
        currentIndex : 0,
        dataSet : this.props.dataSet,
        fullDataSet : this.props.fullDataSet
    }
    currentItem = 0;
    
    static get propTypes() { 
        return { 
            dataSet: PropTypes.any,
            updateDataSet : PropTypes.any,
            fullDataSet : PropTypes.any
        }; 
    }

    removeSelectedItem = (i) => {
        this.toggleShowModal(i);
        this.currentItem = i;
    }

    toggleShowModal = (i) => {
        this.setState({
            showModal : !this.state.showModal,
            toBeEdited : this.props.dataSet[i][0]
        })
    }

    deleteItem = () => {
        if(!(this.currentItem == 0)){
            let updatedData = this.props.dataSet;
            updatedData.pop(this.currentItem)
            this.props.updateDataSet(updatedData);
        }
    }

    updateItem = (u) => {
        if(!(this.currentItem == 0)){
            let updatedData = this.props.dataSet;
            updatedData[this.currentItem][0] = u;
            this.props.updateDataSet(updatedData);
        }
    }

    render() { 
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.dataSet.map((data , i)=> {return {num : i , data : data[0] , date : data[1]}})}
                    renderItem={({item , index}) => <Text onPress={this.removeSelectedItem.bind(this, index)} style={styles.item}>{(Number(item.num))}.  {item.data} on {item.date}</Text>}
                />
                {this.state.showModal && <ModalView fullDataSet={this.state.fullDataSet}  updateItem={this.updateItem} deleteItem={this.deleteItem} text={this.state.toBeEdited} buttonClicked={this.state.buttonClicked} toggleShowModal={this.state.toggleShowModal} modalVisible={this.state.showModal}/>}

            </View>
        );
    }
}

const styles = {
    container: {
        paddingTop: 2,
        height: 300,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderBottomColor: 'grey',
        borderBottomWidth: .5,
    },
}

export default ListItemView;
