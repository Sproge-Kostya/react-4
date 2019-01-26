import React from 'react';
import {Search,Limiter,Modes,Order} from "./index";
export class Toolbar extends React.Component{
    constructor(props){
        super(props);
        this.helperChange = this.helperChange.bind(this);
        this.state = this.props.data;
    }

    helperChange(key,value){
        this.setState({
            key : value
        });
        this.props.onChangeToolbar(this.state);
    }

    render(){
        return(
            <div className="uk-margin-medium-bottom uk-flex">
                <Search />
                <Limiter data={this.state.pagination.limit} handelChange={this.helperChange}/>
                <Modes data={this.state.view} handelChange={this.helperChange}/>
                <Order data={this.state.order} handelChange={this.helperChange}/>
            </div>
        )
    }
}