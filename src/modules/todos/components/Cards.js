import React from "react";
import {Card} from "./Card";
import {getData} from "../../../api/api";
import {Pagination} from "../../../components";

export class Cards extends React.Component {
    constructor(props){
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state ={
            todos:[],
            page:1,
            pagination: {
                total:  1,
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
        .then(todos => {
            if(todos.count){
                this.setState({
                    todos: todos.json,
                    pagination: {
                        total: +todos.count,
                        limit: this.state.pagination.limit
                    }
                });
            }else{
                this.setState({
                    todos: todos.json,
                    pagination: {
                        total: todos.json.length,
                        limit: this.state.pagination.limit
                    }
                });
            }
        });
    }
    onClickPagination(current, e) {
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
    }
    render() {
        return (
            <div>
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                    {this.state.todos.map(function(item) {
                        return <Card key={item.id} data={item}/>
                    })}
                </div>
                <Pagination totalPage={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                            page={this.state.page}
                            handelClick={this.onClickPagination}/>
            </div>

        )
    }
}