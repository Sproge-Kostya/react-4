import React from "react";
import {Album} from "./Album";

export class Albums extends React.Component {
    render() {
        return (
            <table className="uk-table uk-table-justify uk-table-divider">
                <tbody>
                    <Album />
                </tbody>
            </table>
        )
    }
}