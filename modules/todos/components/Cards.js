import React from "react";
import {Card} from "./Card";

export class Cards extends React.Component {
    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                <Card />
            </div>
        )
    }
}