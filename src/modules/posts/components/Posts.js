import React from "react";
import {getData} from "../../../api/api";
import {Articles} from "./Articles";
import {Pagination,Toolbar} from "../../../components/index";

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            posts: [],
            order: 'desc',
            view: 'grid',
            pagination: {
                total: 1,
                limit: 6
            }
        };
    }

    componentDidMount() {
        getData('/posts', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                _order: this.state.order,
                _sort: 'id'
            }
        })
        .then(posts => {
            this.setState({
                posts: posts.json,
                pagination: {
                    total: +posts.count,
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
                _order: this.state.order,
                q: value
            }
        })
        .then(posts => {
            this.setState({
                posts: posts.json,
                pagination: {
                    total: +posts.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };


    onClickPagination = (current, e) => {
        e.preventDefault();
        getData('/posts', {
            params: {
                _limit: this.state.pagination.limit,
                _page: current,
                _order: this.state.order
            }
        })
        .then(posts => {
            this.setState({
                page: current,
                posts: posts.json
            })
        })
    };


    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Toolbar data={this.state} onChangeSearch={this.handleSearch} onChangeToolbar={(data)=>{this.setState(data)}}/>
                        <Articles posts={this.state.posts} view={this.state.view}/>
                        <Pagination
                            totalPage={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                            page={this.state.page}
                            handelClick={this.onClickPagination}/>
                    </div>
                </div>
            </main>
        )
    }
}