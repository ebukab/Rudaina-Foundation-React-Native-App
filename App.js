import React from 'react'
import {AppRegistry} from 'react-native';
import TrackingPage from './srrc/components/TrackingPage';
import TrackingDisplay from './srrc/components/TrackingDisplay';
import HomePage from './srrc/components/HomePage';
import { Router, Scene } from 'react-native-router-flux';


const App  = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="TrackingPage" component={TrackingPage} title="Tracking Page"/>
				<Scene key="HomePage" component={HomePage} initial/>
				<Scene key="TrackingDisplay" component={TrackingDisplay} />
				<Scene key="HomePage" component={HomePage}  title="Home Page"/>
			</Scene>
		</Router>
	);
}

AppRegistry.registerComponent('Rudaina', () => App);
export default App;
