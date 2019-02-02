import React from 'react';

export class Search extends React.Component{
    constructor(props){
        super(props);
    }

    changeEnd(e,timeout){
        let value = e.target.value.trim();

        if(e.target.dataset.setSerch){
            clearTimeout(e.target.dataset.setSerch);
        }

        e.target.dataset.setSerch = setTimeout(() => {this.props.handelChange(value)},timeout);
    }

    render() {
        return (
            <form className="uk-width-medium uk-margin-right">
                <input className="uk-input" type="search"
                       onChange={(e) => { this.changeEnd(e, 1000)}}
                       placeholder="Search..."/>
            </form>
        )
    }
}