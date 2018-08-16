import React , {Component} from 'react';
import { View} from 'react-native';
import TrackingPage from './TrackingPage';
import FooterPage from './FooterPage';
import SideMenu from './SideMenu';

class HomePage extends Component {
    state = { 
        pageToDisplay : ""
    }
    
    static navigationOptions = {
        title: 'Rudaina Foundation',
    };

    setCurrentDisplay = (page) => {
        this.setState({
            pageToDisplay : page
        })
    }

    render() { 
        return (
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    {this.state.pageToDisplay == "Tracking" && <TrackingPage/>}
                    {this.state.pageToDisplay == "SideMenu" && <SideMenu openSideMenu={true}/>}
                </View>
                <View style={styles.footerContainer}> 
                    <FooterPage setCurrentDisplay={this.setCurrentDisplay}/>
                </View>
            </View>
        );
    }
}

const styles = {
    container : {
        flex : 1,
        height : "100%",
        width : "100%"
    },
    bodyContainer : {
        height : "90%",
        borderWidth : 1,
        borderColor : "red",
    },
    footerContainer : {
        height : "10%",
        backgroundColor : "black"
    }
}


export default HomePage;
