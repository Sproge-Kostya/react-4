import React from "react";
import {Album} from "./Album";
import {getData} from "../../../api/api";
import {Pagination} from "../../../components/index";

export class Albums extends React.Component {
    constructor(props){
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state ={
            albums:[],
            page:1,
            pagination: {
                total:  1,
                limit: 4
            }
        }
    }

    componentDidMount() {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
            }
        })
        .then(albums => {
            if(albums.count){
                this.setState({
                    albums: albums.json,
                    pagination: {
                        total: +albums.count,
                        limit: this.state.pagination.limit
                    }
                });
            }else{
                this.setState({
                    albums: albums.json,
                    pagination: {
                        total: albums.json.length,
                        limit: this.state.pagination.limit
                    }
                });
            }
        });
    }

    onClickPagination(current, e) {
        e.preventDefault();
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
            }
        })
        .then(albums => {
            this.setState({
                page: current,
                albums: albums.json
            });
        });
    }

    render() {
        return (
            <div>
                <table className="uk-table uk-table-justify uk-table-divider">
                    <tbody>
                        {this.state.albums.map(function(item) {
                            return <Album key={item.id} data={item}/>
                        })}
                    </tbody>
                </table>
                <Pagination totalPage={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                            page={this.state.page}
                            handelClick={this.onClickPagination}/>
            </div>
        )
    }
}