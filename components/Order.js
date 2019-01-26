import React from 'react';
import {getPosts} from "../api/api";

export class Order extends React.Component{
    constructor(props){
        super(props);
    }

    onClickOrder(event){
        let value = event.target.value;
        this.props.handelChange('order',value);
        // getPosts('/posts',{
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: this.state.page,
        //         _sort: 'id',
        //         _order: value
        //     }
        // })
        // .then(posts => {
        //     this.setState({
        //         posts: posts.json,
        //         order: value
        //     });
        // });
    }

    render(){
        return(
            <select name="order" className="uk-select uk-width-small"
                    onChange={(e) => this.onClickOrder(e)}
                    value={this.props.data}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
        )
    }
}