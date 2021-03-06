import React from "react";
import {getData} from "../../../api/api";
import {Breadcrumb, CommentForm} from "../../../components";
import {Comments} from "./Comments";

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.id,
            post:{
                title:'',
                body:''
            }
        };
    }
    componentDidMount() {
        getData(`/posts/${this.state.postId}`)
        .then(post => {
            this.setState({
                title:post.title,
                body:post.body
            })
        })
    }
    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Breadcrumb url={this.props.match.url}/>
                        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
                            <span>{this.state.title}</span>
                            <span className="uk-text-small">Author</span>
                        </h1>
                        <div className="uk-article uk-dropcap uk-margin-large-bottom">
                            <p>{this.state.body}</p>
                        </div>
                        <Comments/>
                        <CommentForm/>
                    </div>
                </div>
            </main>
        )
    }
}