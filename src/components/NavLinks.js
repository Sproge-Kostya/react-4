import React from 'react';
import {NavLink} from 'react-router-dom';

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
                                <NavLink exact to={`${item.url}`} activeClassName="uk-link-text">{item.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
