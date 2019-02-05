import React from 'react';

export class User extends React.Component{
    render(){
        return(
            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" width="40" height="40"
                                     src="https://picsum.photos/400/400" alt="test"/>
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.data.name}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <ul className="uk-list uk-list-divider">
                            <li><b>Email</b>: {this.props.data.email}</li>
                            <li><b>Phone</b>: {this.props.data.phone}</li>
                            <li><b>Company</b>: {this.props.data.company.name}</li>
                        </ul>
                    </div>
                    <div className="uk-card-footer">
                        <span className="uk-button uk-button-text">Read more</span>
                    </div>
                </div>
            </div>
        )
    }
}