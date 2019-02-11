import React from "react";
import {Album} from "./Album";
import {getData} from "../../../api/api";
import {Pagination, Toolbar} from "../../../components/index";
import {ThemeContext, Themes} from "../../../context";

const sortKey = Themes.albums.toolbar.Sorter.helper;

export class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: Themes.albums,
            albums: [],
            page: 1,
            sorter: 'all',
            pagination: {
                total: 1,
                limit: 4
            }
        }
    }

    componentWillMount() {
        getData('/users')
            .then(data => {
                Themes.albums.toolbar.Sorter.options = data.json.map((user) => {
                    return {
                        id: user.id,
                        value: user.name
                    }
                });
            })
    }

    componentDidMount() {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [sortKey]: this.state.sorter
            }
        }).then(data => {
            this.setState({
                albums: data.json,
                pagination: {
                    total: data.count,
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
                [sortKey]: this.state.sorter,
                q: value
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    pagination: {
                        total: data.count,
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
                [sortKey]: this.state.sorter,
                _sort: 'id'
            }
        })
            .then(data => {
                this.setState({
                    albums: data.json,
                    pagination: {
                        total: data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    };

    handleSorter = (key, value) => {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [key]: value
            }
        }).then(data => {
            this.setState({
                albums: data.json,
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
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [sortKey]: this.state.sorter
            }
        })
            .then(data => {
                this.setState({
                    page: current,
                    albums: data.json
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
                <table className="uk-table uk-table-justify uk-table-divider">
                    <tbody>
                    {this.state.albums.map(function (item) {
                        return <Album key={item.id} data={item}/>
                    })}
                    </tbody>
                </table>
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

Albums.contextType = ThemeContext;