import React from 'react';
import {NavList} from './NavList';
import {Logo} from './Logo';
import {data} from '../data';

export class Header extends React.Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
                <div className="uk-navbar-left">
                    <Logo title="Logo"/>
                    <NavList data={data.items}/>
                </div>
            </nav>
        )
    }
}