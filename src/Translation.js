import React, { Component } from 'react';
import InputBox from './InputBox'
import OutputBox from './OutputBox'
class Translation extends Component {
    constructor(props){
    super(props)
    this.state={
        text: ''
    };

    }
    render() { 
        return (
        <div className="translation-app">
        <InputBox
            changeHandler={this._updateText}
        />
        <OutputBox 
        theText={this.state.text}/>
        </div>
        );
    }

    _updateText = (newText) =>{
        this.setState({
        text:newText
        });
    }




}
export default Translation;