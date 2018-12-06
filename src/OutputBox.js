import React from 'react';

const OutputBox = (props)  =>{
    return(
        <div className="output-box">
        {props.theText}
        </div>
    );
}

export default OutputBox;