import React from "react";

export class Photo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src={this.props.data.url} className="uk-width-1-1" alt={this.props.data.title}/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>{this.props.data.title}</p>
                    </div>
                </div>
            </div>
        )
    }
}