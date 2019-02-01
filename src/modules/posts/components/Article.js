import React from 'react';
import {Link} from 'react-router-dom';

export class Article extends React.Component {
    render() {
        return (
            <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom">
                    <div className="uk-card-header">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.data.id} {this.props.data.title}</h3>
                    </div>
                    <div className="uk-card-body">
                        <p>{this.props.data.body}</p>
                    </div>
                    <div className="uk-card-footer">
                        <Link to={`/posts/${this.props.data.id}`}>Read more</Link>
                    </div>
                </div>
            </div>
        );
    }
}