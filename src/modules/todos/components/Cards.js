import React from "react";
import {Card} from "./Card";
import {getData} from "../../../api/api";
import {Pagination, Toolbar} from "../../../components";
import {ThemeContext, Themes} from "../../../context";

const sortKey = Themes.todos.toolbar.Sorter.helper;

export class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: Themes.todos,
            todos: [],
            page: 1,
            sorter: 'all',
            pagination: {
                total: 1,
                limit: 12
            }
        }
    }

    componentWillMount() {
        getData('/users')
            .then(data => {
                Themes.todos.toolbar.Sorter.options = data.json.map((user) => {
                    return {
                        id: user.id,
                        value: user.name
                    }
                });
            })
    }

    componentDidMount() {
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [sortKey]: this.state.sorter
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
                [sortKey]: this.state.sorter,
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

    handleToolbar = (newstate) => {
        this.setState(newstate);
        getData('/todos', {
            params: {
                _limit: newstate.pagination.limit,
                _page: newstate.page,
                [sortKey]: newstate.sorter,
                _sort: 'id'
            }
        })
        .then(data => {
            this.setState({
                todos: data.json,
                pagination: {
                    total: data.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };

    handleSorter = (key, value) => {
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [key]: value
            }
        }).then(data => {
            this.setState({
                todos: data.json,
                sorter: value,
                pagination: {
                    total: data.count,
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
                [sortKey]: this.state.sorter
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
                         onChangeSorter={this.handleSorter}
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