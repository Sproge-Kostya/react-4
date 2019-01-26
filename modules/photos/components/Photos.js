import React from "react";
import {Photo} from "./Photo";
import {getPosts} from "../../../api/api";

export class Photos extends React.Component {
    constructor(props){
        super(props);
        // this.onClickPagination = this.onClickPagination.bind(this);
        this.state ={
            photos:[],
            page:1,
            pagination: {
                total:  1,
                limit: 6
            }
        }
    }

    changeLimit(){
        let limit = (this.state.page + 1) *  this.state.pagination.limit;
        getPosts('/photos', {
            params: {
                _limit: limit,
            }
        })
        .then(photos => {
            this.setState({
                photos: photos.json,
                page: this.state.page + 1
            });
        })
    }

    componentDidMount() {
        getPosts('/photos', {
            params: {
                _limit: this.state.pagination.limit,
            }
        })
        .then(photos => {
            if(photos.count){
                this.setState({
                    photos: photos.json,
                    pagination: {
                        total: +photos.count,
                        limit: this.state.pagination.limit
                    }
                });
            }else{
                this.setState({
                    photos: photos.json,
                    pagination: {
                        total: photos.json.length,
                        limit: this.state.pagination.limit
                    }
                });
            }
        });
    }

    render() {
        return (
            <div>
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid="masonry: true">
                    {this.state.photos.map(function(item) {
                        return <Photo key={item.id} data={item}/>
                    })}
                </div>
                <ul className="uk-more uk-text-center uk-margin-medium-top">
                    <button onClick={()=>{this.changeLimit()}} className="uk-button uk-button-primary">
                        Load more
                    </button>
                </ul>
            </div>
        )
    }
}