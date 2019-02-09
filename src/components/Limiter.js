import React from 'react';

export class Limiter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: this.props.context
        };
    }

    render() {
        return (
            <select name="limit" className="uk-select uk-width-small uk-margin-left"
                    onChange={(e) => this.props.handelChange('pagination.limit', e.target.value)}
                    value={this.props.data}>
                {
                    this.state.context.isAll ? (
                        <option key="all" value="">All</option>
                    ) : (
                        null
                    )
                }
                {
                    this.state.context.options.map(item => {
                        if(typeof(item) === 'object'){
                            return <option key={item.id} value={item.id}>{item.value}</option>
                        }else{
                            return <option key={item} value={item}>{item}</option>
                        }
                    })
                }
            </select>
        )
    }
}