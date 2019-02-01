import React from 'react';
import {User} from './User';
import {getData} from "../../../api/api";
import {Pagination} from "../../../components";

export class Users extends React.Component{
    constructor(props){
        super(props);
        this.onClickPagination = this.onClickPagination.bind(this);
        this.state ={
            users:[],
            page:1,
            pagination: {
                total:  1,
                limit: 4
            }
        }
    }

    componentDidMount() {
        getData('/users', {
            params: {
                _page:this.state.page,
                _limit: this.state.pagination.limit,
            }
        })
        .then(users => {
            if(users.count){
                this.setState({
                    users: users.json,
                    pagination: {
                        total: +users.count,
                        limit: this.state.pagination.limit
                    }
                });
            }else{
                this.setState({
                    users: users.json,
                    pagination: {
                        total: users.json.length,
                        limit: this.state.pagination.limit
                    }
                });
            }
        });
    }
    onClickPagination(current, e) {
        e.preventDefault();
        getData('/users', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.page,
            }
        })
        .then(users => {
            this.setState({
                page: current,
                users: users.json
            });
        });
    }
    render(){
        console.log(this.state.users);
        return(
            <div>
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid>
                    {this.state.users.map(function(item) {
                        return <User key={item.id} data={item}/>
                    })}
                </div>
                <Pagination totalPage={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                            page={this.state.page}
                            handelClick={this.onClickPagination}/>
            </div>
        )
    }
}