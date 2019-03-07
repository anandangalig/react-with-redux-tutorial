import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const geolocation = window.navigator.geolocation.getCurrentPosition(
        (pos)=>console.log(pos),
        (err)=>console.log(err)
        
    );
    return (
        <div>test</div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));