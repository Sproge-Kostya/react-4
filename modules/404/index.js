import React from 'react';

export class Error extends React.Component{
    render(){
        return(
            <div>
                <h1>...404</h1>
                <p>Something went wrong. To go home <code>{location.host}</code></p>
            </div>
        )
    }
}