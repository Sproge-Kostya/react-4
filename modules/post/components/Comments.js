import React from "react";
import {Comment} from "./Comment";

export class Comments extends React.Component {
    render() {
        return (
            <div>
                <h3 className="uk-margin-remove-top">Comments:</h3>
                <div className="uk-comments">
                    <Comment/>
                </div>
            </div>
        )
    }
}