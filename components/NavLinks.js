import React from 'react';
import {Link} from 'react-router-dom';

export class NavLinks extends React.Component {
    render() {
        return <li>
            <Link to={`${this.props.url}`}>{this.props.name}</Link>
        </li>;
    }
}