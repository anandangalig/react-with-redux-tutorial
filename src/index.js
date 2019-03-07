import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // calls the constructor function of the parent class
        this.state = {lat: null, errorMessage: ''}; // the ONLY time we directly set state
         
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    render() {
        if(this.state.lat && !this.state.errorMessage) {
            return (<div>Latitude: {this.state.lat}</div>);
        }
        if(!this.state.lat && this.state.errorMessage) {
           return (<div>Error: {this.state.errorMessage}</div>);
        }
        return (<div>Loading...</div>);
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));