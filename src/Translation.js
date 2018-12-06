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
        bgClass='bg-green'
        olClass='outline-red'

        />
        <OutputBox 
        theText={this.state.text}
        transformer='l33t'
        bgClass='bg-yellow'
        olClass='outline-blue'
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