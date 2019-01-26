import React from 'react';

export class Search extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <form className="uk-width-medium uk-margin-right">
                <input className="uk-input" type="search" placeholder="Search..."/>
            </form>
        )
    }
}