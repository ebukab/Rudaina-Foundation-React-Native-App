import React , {Component}  from 'react'
import { View , Dimensions  } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';

class Chart extends Component {

    static get propTypes() { 
        return { 
            dataSet: PropTypes.any 
        }; 
    }
    render() {
        return (
            <View style={{height : "100%"}}>
                <LineChart
                    data={{
                        labels: this.props.dataSet.map((data , i)=>{return( i)}),
                        datasets: [{
                            data: this.props.dataSet.map((data)=>data[0])
                        }]
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={.35*(Dimensions.get('window').height)}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#ff6666',
                        backgroundGradientTo: '#666666',
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 0,
                            height : "100%",
                            color : "black"
                        }
                    }}
                    bezier
                    style={{
                    marginVertical: 1,
                    borderRadius: 1
                    }}
                />
</View>
        );
    }
}

export default Chart;