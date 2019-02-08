import React from 'react';

export class Limiter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: this.props.context
        }
    }

    render() {
        return (
            <select name="limit" className="uk-select uk-width-small uk-margin-left"
                    onChange={(e) => this.props.handelChange('pagination.limit',e.target.value)}
                    value={this.props.data}>
                {
                    this.state.options.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })
                }
            </select>
        )
    }
}