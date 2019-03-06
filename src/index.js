//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return {text: 'Clack'};
}
// Create a react component: can be function based OR class based
const App = () => {
    return (
        <div>
            <h1>I want donuts!</h1>
            <label className="label" htmlFor="name">Enter donut name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText().text}</button> 
            {/* {{}}: first is for JSX expression/interpolation, second is for the object containing the style */}
        </div>
    );
}
// Render the created component 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);                                                                                                                                                 