import React from 'react';

export class Limiter extends React.Component{
    constructor(props){
        super(props);
    }

    onClickLimit(event) {
        let value = event.target.value;
        this.props.handelChange('limit',value);
    }

    render() {
        return (
            <select name="limit" className="uk-select uk-width-small uk-margin-left"
                    onChange={(e) => this.onClickLimit(e)}
                    value={this.props.data}>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
            </select>
        )
    }
}