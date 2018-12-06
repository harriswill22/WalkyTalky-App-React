import React from 'react';
const l33t ={
    A: '4',
    E: '3',
    G: '6',
    I: '1',
    O: '0',
    S: '5',
    T: '7'
}



function toL33t(originalText) { 
    const letterArray = originalText.split('');
    const L33Array = letterArray.map(letter =>{
        return l33t[letter.toUpperCase()] || letter;
    });
    return L33Array.join('');
}



const OutputBox = (props)  =>{
    let textToDisplay = props.theText
    if(props.transformer === 'l33t'){
        textToDisplay = toL33t(props.theText)
    } else{
        textToDisplay = props.theText.toUpperCase();
    }

    return(
        <div className={`
        ${props.bgClass}
        ${props.olClass}
        output-box`}>
        {textToDisplay}
        </div>
    );
}

export default OutputBox;