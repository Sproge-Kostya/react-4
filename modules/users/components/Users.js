import React from 'react';
import {User} from './User';

export class Users extends React.Component{
    render(){
        return(
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid>
                <User />
            </div>
        )
    }
}