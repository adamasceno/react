import React, { Component } from 'react';

export default class Clock2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: 'tempoooo'
            
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.updateClock(), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        });
    }

    render() {

        return (
            <h1>
                {this.state.time}
            </h1>
        );
    }
}
