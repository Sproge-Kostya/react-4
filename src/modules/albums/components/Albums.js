import React from "react";
import {Album} from "./Album";
import {getData} from "../../../api/api";
import {Pagination, Toolbar} from "../../../components/index";
import {ThemeContext, Themes} from "../../../context";

export class Albums extends React.Component {
    constructor(props){
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state ={
            theme: Themes.albums,
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
            this.setState({
                albums: albums.json,
                pagination: {
                    total: +albums.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    }

    handleSearch = (value) => {
        getData('/posts', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                q: value
            }
        })
        .then(albums => {
            this.setState({
                albums: albums.json,
                pagination: {
                    total: +albums.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };

    handleToolbar = (data) => {
        this.setState(data);
        getData('/posts', {
            params: {
                _limit: data.pagination.limit,
                _page: data.page,
                _sort: 'id'
            }
        })
        .then(albums => {
            this.setState({
                albums: albums.json,
                pagination: {
                    total: +albums.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };

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
            <ThemeContext.Provider value={this.state.theme}>
                <div>
                    <Toolbar data={this.state}
                             onChangeSearch={this.handleSearch}
                             onChangeToolbar={this.handleToolbar}/>
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
            </ThemeContext.Provider>
        )
    }
}