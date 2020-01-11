import React from 'react';

const validation = (props) => {
    var inputLength = props.inputLength;
    var limit = 5;
    var diff = inputLength - limit

    if (diff === 0) {
        return (<div>Text ok</div>)
    }
    else if (diff > 0) {
        
        return (<div>Text too Long</div>)
    }
    else {
        return (<div>Text too Short</div>)
    }





};

export default validation;