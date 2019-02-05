import React from "react";

export class Breadcrumb extends React.Component {
    render() {
        return (
            <ul className="uk-breadcrumb uk-margin-medium-bottom">
                <li><span>Item</span></li>
                <li><span>Item</span></li>
                <li><span>Active</span></li>
            </ul>
        )
    }
}