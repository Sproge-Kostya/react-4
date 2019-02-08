import React from 'react';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.context
        }
    }

    render() {
        return (
            <select name="order" className="uk-select uk-width-small"
                    onChange={(e) => this.props.handelChange('order', e.target.value)}
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