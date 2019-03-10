import React from 'react';

const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
}

// components can be re-used many times and some parents may not pass along any props
// to create default props:
Loading.defaultProps = {
    message: 'Loading...',
};

export default Loading;