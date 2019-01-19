import React from "react";
import {data} from "../../../data";
import {getPosts, getPostsTest} from "../../../api/api";
import {Articles} from "./Articles";
import {Pagination} from "../../../components/index";

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state = {
            page: 1,
            posts: [],
            pagination: {
                total: 100,
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

    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <form className="uk-margin-bottom uk-flex uk-flex-right">
                            <select name="order" className="uk-select uk-width-small">
                                <option value="asc">ASC</option>
                                <option value="desc">DESC</option>
                            </select>
                            <select name="limit" className="uk-select uk-width-small uk-margin-left">
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="24">24</option>
                            </select>
                        </form>
                        <Articles posts={this.state.posts}/>
                        <Pagination
                            limit={this.state.pagination.limit}
                            total={this.state.pagination.total}
                            page={this.state.page}
                            handelClick={this.onClickPagination}/>
                    </div>
                </div>
            </main>
        )
    }
}