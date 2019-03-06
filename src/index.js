//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Create a react component: can be function based OR class based
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
}
// Render the created component 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);                                                                                                                                                 