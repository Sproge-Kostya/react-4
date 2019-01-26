import React from "react";

export class Album extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <tr>
                <td><span uk-icon="icon: album; ratio: 2"></span></td>
                <td>{this.props.data.title}</td>
                <td>
                    <a href="#" className="uk-button uk-button-primary js-lightbox">Open album</a>
                </td>
            </tr>
        )
    }
}