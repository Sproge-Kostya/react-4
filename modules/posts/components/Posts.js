import React from "react";
import {getPosts} from "../../../api/api";
import {Articles} from "./Articles";
import {Pagination,Toolbar} from "../../../components/index";

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.helperChangeToolbar = this.helperChangeToolbar.bind(this);
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
        getPosts('/posts', {
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

    helperChangeToolbar(data){
        console.log(data);
        // this.setState({
        //     page: data.page,
        //     posts: data.posts,
        //     order: data.order,
        //     view: data.view,
        //     pagination: {
        //         total: data.pagination.total,
        //         limit: data.pagination.limit
        //     }
        // });
        // getPosts('/posts', {
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: this.state.page,
        //         _order: this.state.order,
        //         _sort: 'id'
        //     }
        // })
        // .then(posts => {
        //     this.setState({
        //         posts: posts.json,
        //         pagination: {
        //             total: +posts.count,
        //             limit: this.state.pagination.limit
        //         }
        //     });
        // });
    }

    onClickPagination(current, e) {
        e.preventDefault();
        getPosts('/posts', {
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
    }


    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Toolbar data={this.state} onChangeToolbar={this.helperChangeToolbar}/>
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