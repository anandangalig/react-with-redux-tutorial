import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // calls the constructor function of the parent class
        this.state = {lat: null, errorMessage: ''}; // the ONLY time we directly set state
    }
    // Frequently used LIFECYCLE methods: at component creation, re-render, removal time points:
    componentDidMount() { //do one time data loading here instead of constructor) - it creates easy to read code
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
        console.log('componentDidMount');
    }
    componentDidUpdate() { // do frequent data loading here (e.g. refresh/ state/prop change) 
        console.log('componentDidUpdate');
    }
    componentWillUnmount() { // do clean-up here
        console.log('componentWillUnmount');
    } 
    // Rarely used LIFECYCLE methods:
    // shouldComponentUpdate() {}
    // getSnapshotBeforeUpdate() {}
    // getDerivedStateFromProps() {}


    // render() should only return some JSX, no business logic here because it will be called many times.
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