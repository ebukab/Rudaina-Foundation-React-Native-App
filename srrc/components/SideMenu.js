import React , {Component} from 'react';
import {SafeAreaView , ScrollView , Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import {createDrawerNavigator } from "react-navigation";
import HomePageScreen from './HomePageScreen';
import SettingsPageScreen from './Settingspage';
import DrawerItems from './DrawerItems';
import InstructionPage from './InstructionPage';

class SideMenu extends Component {
    state = {
        openSideMenu : this.props.openSideMenu
    }

    static get propTypes() { 
        return { 
            openSideMenu: PropTypes.any
        }; 
    }

    toggleSideMenu = () => {
        alert(this.state.openSideMenu);
        // alert(this.props.openSideMenu);
        this.setState({
            openSideMenu : !this.state.openSideMenu
        })
    }

    render() { 
        return (
            <MyApp/>
        );
    }
}

const CustomDrawerComponent = () => (
    <SafeAreaView style={{flex : 1}}>
        <ScrollView>
            {/*<DrawerItems {...props}/>*/}
            <DrawerItems/>
        </ScrollView>
    </SafeAreaView>
)

const MyApp = createDrawerNavigator(
    {
    Home : {screen : HomePageScreen},
    Settings : {screen : SettingsPageScreen},
    InstructionPage : {screen : InstructionPage}
    },
    {
        contentComponent : CustomDrawerComponent,
        drawerWidth  : Dimensions.get('window').width/2,
        drawerPosition  : "right",
        drawerBackgroundColor  : "black",
        useNativeAnimations  : true
    }
)

export default SideMenu;