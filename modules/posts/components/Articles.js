import React from 'react';
import {Article} from './Article';

export class Articles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.item.map(function (item) {
                    return <Article key={item.id} data={item}/>
                })}
            </div>
        );
    }
}