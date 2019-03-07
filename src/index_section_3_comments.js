//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

// Create a react component: can be function based OR class based
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                {/* passing CommentDetail component as the Child. Will be in props.children in the parent: */}
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 3:15PM" 
                    comment={faker.lorem.words()} 
                    imageSource={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 10:55PM" 
                    comment={faker.lorem.words()} 
                    imageSource={faker.image.avatar()} 
                />
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Tomorrow at 1:11AM" 
                    comment={faker.lorem.words()} 
                    imageSource={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}
// Render the created component 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);                                                                                                                                                 