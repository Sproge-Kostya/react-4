import React from "react";

export class Photo extends React.Component {
    render() {
        return (
            <div className="uk-inline uk-width-1-1">
                <img src="https://picsum.photos/600/400" className="uk-width-1-1" alt=""/>
                <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        )
    }
}