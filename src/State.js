import React, {Component} from 'react';

export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Andre',
            age: 22
        };

        console.log(this.state);
        // this.props = {

        // };
    }

    render(){
        const {name, age} = this.state
        return(
            <div>
                <p>State</p>
                <p>{name}</p>
            </div>
        );
    }
}