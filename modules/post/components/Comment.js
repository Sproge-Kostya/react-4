import React from "react";

export class Comment extends React.Component {
    render() {
        return (
            <article className="uk-comment">
                <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="#">Author</a>
                        </h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </article>
        )
    }
}