import React from 'react';
import {Link} from 'react-router-dom';

export class Logo extends React.Component {
    render() {
        return (
            <Link className="uk-navbar-item uk-logo" to='/'>{this.props.title}</Link>
        )
    }
}