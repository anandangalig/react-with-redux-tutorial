import React from 'react';
import CommentDetail from './CommentDetail';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">            </div>
            <div className="ui two buttons">
                <button className="ui basic green button">Approve</button>
                <button className="ui basic red button">Reject</button>
            </div>
        </div>
    );
}

export default ApprovalCard;