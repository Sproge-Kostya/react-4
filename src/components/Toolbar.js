import React from 'react';
import {Search, Limiter, Modes, Order} from "./index";
import {ThemeContext} from "../context";

export class Toolbar extends React.Component {
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
    };

    render() {
        const toolbar = this.context.toolbar;
        return (
            <div className="uk-margin-medium-bottom uk-flex">
                {
                    toolbar.Search.isActive ? (
                        <Search handelChange={(value) => {this.props.onChangeSearch(value)}}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Limiter.isActive ? (
                        <Limiter context={toolbar.Limiter.options} data={this.props.data.pagination.limit} handelChange={this.helperChange}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Modes.isActive ? (
                        <Modes data={this.props.data.view} handelChange={this.helperChange}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Order.isActive ? (
                        <Order context={toolbar.Order.options} data={this.props.data.order} handelChange={this.helperChange}/>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}
Toolbar.contextType = ThemeContext;