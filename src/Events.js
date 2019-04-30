import React, {Component} from 'react';

export default class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Andre',
            age: 22,
            clickCounter: 0
        };

        // this.clickMethod = this.clickMethod.bind(this);
    }

    clickMethod = () => {        
        this.setState({
            clickCounter: this.state.clickCounter + 1
        });
    }

    render(){
        const clickCounter = this.state.clickCounter;
        return(
            <div style={{padding:'20px'}}>
                <button type="button" onClick={this.clickMethod} >Click me!!!</button>
                <p>{clickCounter}</p>
            </div>
        );
    }
}