import React from "react";

export class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="uk-card uk-card-default uk-card-body">
                    <div className={this.props.data.completed?"uk-label":"uk-label uk-label-danger"} >{this.props.data.completed ? 'Completed': 'Actived'}</div>
                    <h3 className="uk-card-title uk-margin-small">{this.props.data.title}</h3>
                </div>
            </div>
        )
    }
}