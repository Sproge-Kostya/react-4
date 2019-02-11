import React from 'react';

export class Sorter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: this.props.context
        };
    }

    render() {
        return (
            <select name="sorter" className="uk-select uk-width-small uk-margin-left"
                    onChange={(e) => this.props.handelChange(this.props.context.helper, e.target.value)}
                    value={this.props.data.sorter}>
                {
                    this.state.context.isAll ? (
                        <option key="all" value="all">All</option>
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