//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component: can be function based OR class based
const App = () => {
    return (
        <div>
            <h1>I want donuts!</h1>
        </div>
    );
}
// Render the created component 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);