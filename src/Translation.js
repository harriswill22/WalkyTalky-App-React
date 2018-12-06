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
            theText={this.state.text}
            changeHandler={this._updateText}
        />
        <OutputBox 
        theText={this.state.text}
        />
        <OutputBox 
        theText={this.state.text}
        transformer='l33t'
        />
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