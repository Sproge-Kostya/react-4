import React from 'react';
import {NavLinks} from './NavLinks';

export class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.data};
    }
    render() {
        return (
            <ul className="uk-navbar-nav">
                {
                    this.state.items.map(function (item) {
                        return <NavLinks key={item.id} name={item.title} url={item.url}/>
                    })
                }
            </ul>
        );
    }
}