import React from 'react';
import {Search, Limiter, Modes, Order} from "./index";

export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    helperChange = (key, value) => {
        const path = key.split('.');
        const depth = path.length;
        const oldstate = this.props.data;
        const newstate = { ...oldstate };
        let newStateLevel = newstate;
        let oldStateLevel = oldstate;

        for (let i = 0; i < depth; i += 1) {
            if (i === depth - 1) {
                newStateLevel[path[i]] = value;
            } else {
                newStateLevel[path[i]] = { ...oldStateLevel[path[i]] };
                oldStateLevel = oldStateLevel[path[i]];
                newStateLevel = newStateLevel[path[i]];
            }
        }

        this.props.onChangeToolbar(newstate);
    }

    render() {
        return (
            <div className="uk-margin-medium-bottom uk-flex">
                <Search handelChange={(value)=>{this.props.onChangeSearch(value)}}/>
                <Limiter data={this.props.data.pagination.limit} handelChange={this.helperChange}/>
                <Modes data={this.props.data.view} handelChange={this.helperChange}/>
                <Order data={this.props.data.order} handelChange={this.helperChange}/>
            </div>
        )
    }
}