import React from "react";
import {data} from "../../../data";
import {getPosts} from "../../../api/api";
import {Articles} from "./Articles";
import {Pagination} from "../../../components/index";

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.pageChange = this.pageChange.bind(this);
        this.state = {
            page: 1,
            limit: data.pagination.limit,
            items: [],
            item: [],
            pagination: {
                total: 1,
                page: 1,
                pages: [],
                limit: 6
            }
        };
    }

    componentDidMount() {
        getPosts({
            limit: this.state.pagination.limit,
            page: this.state.pagination.limit
        })
        .then(posts => {
            this.setState({
                item: posts
            })
        })
    }

    componentWillMount() {
        this.newArr(this.state.page)
    }

    newArr(page) {
        const data = this.state.items;
        const pageSize = this.state.limit;
        const currentPage = page;
        const upperLimit = currentPage * pageSize;
        const dataSlice = data.slice((upperLimit - pageSize), upperLimit);
        this.setState({
            item: dataSlice,
            pagination: {
                total: dataSlice.length,
                page: 1,
                pages: [],
                limit: 6
            }
        });
    }

    pageChange(curr, e) {
        e.preventDefault();
        this.setState({
            page: curr
        });
        this.newArr(curr);
    }

    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Articles item={this.state.item}/>
                        <Pagination data={this.state.pagination} handelClick={this.pageChange}/>
                    </div>
                </div>
            </main>
        )
    }
}