import React from 'react';

export class Modes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:this.props.data
        };
    }

    onClickView(event){
        let target = event.currentTarget.value;
        if(target === 'grid'){
            this.setState({
                view:'grid'
            })
        }else{
            this.setState({
                view:'list'
            })
        }
        this.props.handelChange('view',this.state.view);
    }

    render(){
        return(
            <div className="uk-button-group uk-margin-left">
                <button onClick={(e)=>this.onClickView(e)} value='grid'
                        className={`uk-button uk-button-default ${this.state.view === 'grid' ? 'uk-active' : ''}`}>
                    <span uk-icon="icon:grid"></span>
                </button>
                <button onClick={(e)=>this.onClickView(e)} value='list'
                        className={`uk-button uk-button-default ${this.state.view === 'list' ? 'uk-active' : ''}`}>
                    <span uk-icon="icon:list"></span>
                </button>
            </div>
        )
    }
}