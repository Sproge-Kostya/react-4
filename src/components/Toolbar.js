import React from 'react';
import {Search, Limiter, Model, Order} from "./index";
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
                        <Search context={toolbar.Search} handelChange={(value) => {this.props.onChangeSearch(value)}}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Order.isActive ? (
                        <Order context={toolbar.Order} data={this.props.data.order} handelChange={this.helperChange}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Limiter.isActive ? (
                        <Limiter context={toolbar.Limiter} data={this.props.data.pagination.limit} handelChange={this.helperChange}/>
                    ) : (
                        null
                    )
                }
                {
                    toolbar.Model.isActive ? (
                        <Model context={toolbar.Model} data={this.props.data.view} handelChange={(value) => {this.props.onChangeModel(value)}}/>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}
Toolbar.contextType = ThemeContext;