import React from "react";

export class Breadcrumb extends React.Component {
    render() {
        return (
            <ul className="uk-breadcrumb uk-margin-medium-bottom">
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><span>Active</span></li>
            </ul>
        )
    }
}