import React from 'react';
import {Link} from 'react-router-dom';

export class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.data};
    }
    render() {
        return (
            <ul className="uk-navbar-nav">
                {
                    this.state.items.map(function (item) {
                        return (
                            <li key={item.id}>
                                <Link to={`${item.url}`}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
