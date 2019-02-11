import React from "react";
import {Photo} from "./Photo";
import {getData} from "../../../api/api";
import {Toolbar} from "../../../components";
import {ThemeContext, Themes} from "../../../context";

const sortKey = Themes.photos.toolbar.Sorter.helper;

export class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: Themes.photos,
            photos: [],
            page: 1,
            sorter: 'all',
            pagination: {
                total: 1,
                limit: 6
            }
        }
    }

    componentWillMount() {
        getData('/albums')
            .then(data => {
                Themes.photos.toolbar.Sorter.options = data.json.map((data) => {
                    return {
                        id: data.id,
                        value: `Album ${data.id}`
                    }
                });
            })
    }

    changeLimit() {
        let limit = (this.state.page + 1) * this.state.pagination.limit;
        getData('/photos', {
            params: {
                _limit: limit,
                [sortKey]: this.state.sorter
            }
        })
            .then(data => {
                this.setState({
                    photos: data.json,
                    page: this.state.page + 1
                });
            })
    }

    handleSearch = (value) => {
        getData('/photos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [sortKey]: this.state.sorter,
                q: value
            }
        })
            .then(data => {
                this.setState({
                    photos: data.json,
                    pagination: {
                        total: data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    };

    handleSorter = (key, value) => {
        getData('/photos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
                [key]: value
            }
        }).then(data => {
            this.setState({
                photos: data.json,
                sorter: value,
                pagination: {
                    total: data.count,
                    limit: this.state.pagination.limit
                }
            });
        });
    };

    handleToolbar = (data) => {
        this.setState(data);
        getData('/photos', {
            params: {
                _limit: data.pagination.limit,
                _page: data.page,
                [sortKey]: this.state.sorter,
                _sort: 'id'
            }
        })
            .then(data => {
                this.setState({
                    photos: data.json,
                    pagination: {
                        total: data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    };

    componentDidMount() {
        getData('/photos', {
            params: {
                _limit: this.state.pagination.limit,
                [sortKey]: this.state.sorter
            }
        })
            .then(data => {
                this.setState({
                    photos: data.json,
                    pagination: {
                        total: data.count,
                        limit: this.state.pagination.limit
                    }
                });
            });
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar data={this.state}
                         onChangeSearch={this.handleSearch}
                         onChangeSorter={this.handleSorter}
                         onChangeToolbar={this.handleToolbar}/>
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid="masonry: true">
                    {this.state.photos.map(function (item) {
                        return <Photo key={item.id} data={item}/>
                    })}
                </div>
                <ul className="uk-more uk-text-center uk-margin-medium-top">
                    <button onClick={() => {
                        this.changeLimit()
                    }} className="uk-button uk-button-primary">
                        Load more
                    </button>
                </ul>
            </ThemeContext.Provider>
        )
    }
}