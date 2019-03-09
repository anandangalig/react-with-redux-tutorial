import React from 'react';

const seasonConfig = {
    summer: {
        text: 'It feel like L.A., it feel like Miami/It feel like N.Y., summertime Chi/Ah! (Now throw yo\' hands up in the sky)',
        iconClass: 'sun icon',
    },
    winter: {
        text: 'It\'s cold out there for a pimp',
        iconClass: 'snowflake icon',
    },
};
const getSeason = (lat) => {
    let month = new Date().getMonth();
    let season = '';
    if(month > 2 && month < 9) {
        season = lat > 0 ? 'summer' : 'winter';
    }else {
        season = lat > 0 ? 'winter' : 'summer';
    }
    return season;
}
 
const SeasonDisplay = (props) => {
    let season = getSeason(props.lat); 
    let {text, iconClass} = seasonConfig[season]; // ES6 destructuring assignment
    return(
        <div>
            <i className={iconClass}></i>
            {text}
            <i className={iconClass}></i>
        </div>
    );
}

export default SeasonDisplay;