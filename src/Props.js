import React, { Component } from 'react';
import Panel from './Panel';

export default class Clock extends Component {
    constructor(props){
        // this.props = {
        //     attr: 'Value',
        //     attr3: 'Value3'
        // };

        // this.props.attr;
        super(props);
        // const {attr, attr2} = this.props;
        // console.log(attr, attr2)
    }
    
    render() {        
        const {attr, attr2} = this.props;

        return (
            <div>
            {attr === 'VALUE' ? <p>PROPS</p> : <h1>PROPS H1</h1>}
            <Panel headerText="HeaderText" headerColor="red" text="Panel text" />
            </div>
        );
    }
}
