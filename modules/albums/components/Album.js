import React from "react";

export class Album extends React.Component {
    render() {
        return (
            <tr>
                <td><span uk-icon="icon: album; ratio: 2"></span></td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </td>
                <td>
                    <a href="#" className="uk-button uk-button-primary js-lightbox">Open album</a>
                </td>
            </tr>
        )
    }
}