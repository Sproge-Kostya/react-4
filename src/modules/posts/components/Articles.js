import React from 'react';
import {Article} from './Article';

export class Articles extends React.Component {
    render() {
        return (
            <div className={this.props.view === 'grid'? "uk-grid uk-child-width-1-2@s uk-child-width-1-3@m": "uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"}>
                {this.props.posts.map(function(item) {
                    return <Article key={item.id} data={item}/>
                })}
            </div>
        );
    }
}
