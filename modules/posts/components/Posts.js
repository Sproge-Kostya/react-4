import React from "react";
import {getPosts} from "../../../api/api";
import {Articles} from "./Articles";
import {Pagination} from "../../../components/index";

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state = {
            page: 1,
            posts: [],
            order: 'asc',
            pagination: {
                total: 1,
                limit: 6
            }
        };
    }

    componentDidMount() {
        getPosts({
            limit: this.state.pagination.limit,
            page: this.state.page
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

    onClickPagination(current, e) {
        e.preventDefault();
        getPosts({
            limit: this.state.pagination.limit,
            page: current
        })
            .then(posts => {
                this.setState({
                    page: current,
                    posts: posts.json
                })
            })
    }

    onClickLimit(event) {
        let value = event.target.value;
        getPosts({
            limit: value,
            page: this.state.page
        })
            .then(posts => {
                this.setState({
                    posts: posts.json,
                    pagination: {
                        total: +posts.count,
                        limit: value
                    },
                })
            });
    }

    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-margin-medium-bottom uk-flex">
                            <form className="uk-width-medium uk-margin-right">
                                <input className="uk-input" type="search" placeholder="Search..."/>
                            </form>
                            <select name="order" className="uk-select uk-width-small" defaultValue={this.state.order}>
                                <option value="asc">ASC</option>
                                <option value="desc">DESC</option>
                            </select>
                            <select name="limit" className="uk-select uk-width-small uk-margin-left"
                                    onChange={(e) => this.onClickLimit(e)}
                                    value={this.state.pagination.limit}>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="24">24</option>
                            </select>
                            <div className="uk-button-group uk-margin-left">
                                <button className="uk-button uk-button-default">
                                    <span uk-icon="icon:  grid"></span>
                                </button>
                                <button className="uk-button uk-button-default uk-active">
                                    <span uk-icon="icon:  list"></span>
                                </button>
                            </div>
                        </div>
                        <Articles posts={this.state.posts}/>
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