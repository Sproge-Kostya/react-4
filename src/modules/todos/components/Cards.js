import React from "react";
import {Card} from "./Card";
import {getData} from "../../../api/api";
import {Pagination, Toolbar} from "../../../components";
import {ThemeContext, Themes} from "../../../context";

export class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: Themes.todos,
            todos: [],
            page: 1,
            pagination: {
                total: 1,
                limit: 12
            }
        }
    }

    componentDidMount() {
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
            }
        })
            .then(data => {
                this.setState({
                    todos: data.json,
                    pagination: {
                        total: +data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    }

    handleSearch = (value) => {
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                q: value
            }
        })
        .then(data => {
            this.setState({
                todos: data.json,
                pagination: {
                    total: +data.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };

    handleToolbar = (data) => {
        this.setState(data);
        getData('/todos', {
            params: {
                _limit: data.pagination.limit,
                _page: data.page,
                _sort: 'id'
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    pagination: {
                        total: +data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    };

    onClickPagination = (current, e) => {
        e.preventDefault();
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
            }
        })
            .then(todos => {
                this.setState({
                    page: current,
                    todos: todos.json
                });
            });
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar data={this.state}
                         onChangeSearch={this.handleSearch}
                         onChangeToolbar={this.handleToolbar}/>
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                    {this.state.todos.map(function (item) {
                        return <Card key={item.id} data={item}/>
                    })}
                </div>
                <Pagination pagination={{
                    limit: this.state.pagination.limit,
                    page: this.state.page,
                    total: this.state.pagination.total
                }}
                            handelClick={this.onClickPagination}/>
            </ThemeContext.Provider>

        )
    }
}