import React from 'react';

const InputBox = (props)  =>{
    return(
        <input 
        className="input-box"
        value={props.theText}
        onChange={(event) => {
        console.log(event.target.value); 
        props.changeHandler(event.target.value);    
        }}
    />
    );

    };

export default InputBox;