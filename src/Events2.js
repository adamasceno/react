import React, {Component} from 'react';

export default class Events2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            data: []
        };

        // this.clickMethod = this.clickMethod.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    insertToData = () => {
        const a = this.state.data;
        a.push(this.state.name, this.state.age);

        this.setState({
            data: a
        });
        console.log(this.state.data);
        // this.state.data = [];
    }

    render(){
        const {data} = this.state;
        return(
            <div style={{padding:'20px'}}>
                <input type="text" name="name" id="name" placeholder="Enter your name here" onChange={this.handleChange}></input>
                <input type="text" name="age" id="name" placeholder="Enter your age here" onChange={this.handleChange}></input>
                <button type="button" onClick={this.insertToData}>Ok!</button>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
                <ul>
                    {
                        data.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}