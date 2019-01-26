import React from "react";
import {Photo} from "./Photo";

export class Photos extends React.Component {
    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid="masonry: true">
                <Photo />
                <ul className="uk-more uk-text-center uk-margin-medium-top">
                    <button className="uk-button uk-button-primary">
                        Load more
                    </button>
                </ul>
            </div>
        )
    }
}