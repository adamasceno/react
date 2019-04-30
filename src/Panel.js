import React, {Component} from 'react';

export default class Panel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {headerText, headerColor, text} = this.props;

        return(
            <div className="panel" style={{border:'2px solid red', width:'500px', height:'100px', position:'relative'}}>
                <div className="panel-head" style={{ width:'100%' , backgroundColor: headerColor }}>
                    {headerText}
                </div>
                <div className="panel-body">
                    {text}
                </div>
            </div>
        );
    }
}