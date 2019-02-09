import React from "react";
import {Link} from 'react-router-dom';

export class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url.slice(1).split('/')
        };
    }

    render() {
        return (
            <ul className="uk-breadcrumb uk-margin-medium-bottom">
                <li>
                    <Link to="/">home</Link></li>
                    {this.state.url.map((link, index, array) => {

                        let isActive = index === array.length - 1;

                        if (isActive) {
                            return <li key={index}><span>{link}</span></li>
                        } else {
                            return <li key={index}><Link to={`/${link}`}>{link}</Link></li>
                        }

                    })}
            </ul>
        )
    }
}