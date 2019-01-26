import React from 'react';
import {getPosts} from "../api/api";

export class Limiter extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.data);
        // this.state = {
        //     limit:this.props.data
        // };
    }

    onClickLimit(event) {
        let value = event.target.value;
        // getPosts('/posts',{
        //     params: {
        //         _limit: value,
        //         _page: this.state.page,
        //         _order: this.state.order
        //     }
        // })
        // .then(posts => {
        //     this.setState({
        //         posts: posts.json,
        //         pagination: {
        //             total: +posts.count,
        //             limit: value
        //         },
        //     });
        //
        // });
        this.props.handelChange('limit',value);
    }

    render() {
        return (
            <select name="limit" className="uk-select uk-width-small uk-margin-left"
                    onChange={(e) => this.onClickLimit(e)}
                    value={this.props.data}>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
            </select>
        )
    }
}