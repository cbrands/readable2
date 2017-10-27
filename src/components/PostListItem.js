import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost, fetchComments, fetchPosts, fetchPostsForCategory } from "../actions/index";
import axios from 'axios';
import {api} from '../utils/Constants';
import { getHeaders } from '../utils/AuthorizationHelper';

class PostListItem extends Component {

    componentWillMount() {
        this.setState({ commentcounter: 0 })
    }

    clicked(id) {
        this.props.fetchPost(id);
        this.props.fetchComments(id);
    }

    voted(option) {
        axios.post(`${api}/posts/${this.props.post.id}`, { option }, getHeaders()).then((response) => {
            if(this.props.selectedCategory !== 'home') {
                this.props.fetchPostsForCategory(this.props.selectedCategory);
            } else {
                this.props.fetchPosts();
            }
        });
    }

    commentsCounter(postId){
        axios.get(`${api}/posts/${postId}/comments`, getHeaders()).then((response) =>  {
            if(this.state.commentcounter !== response.data.length) {
                this.setState({commentcounter: response.data.length});
            }
        });
    }

    deletePost(post) {
        axios.get(`${api}/posts/${post.id}/comments`, getHeaders()).then((response) => {
            response.data.forEach((acomment) => {
                axios.delete(`${api}/comments/${acomment.id}`, getHeaders());
            })
        });
        axios.delete(`${api}/posts/${post.id}`, getHeaders()).then((response) => {
            if(this.props.selectedCategory !== 'home') {
                this.props.fetchPostsForCategory(this.props.selectedCategory);
            } else {
                this.props.fetchPosts();
            }
        });
    }

    render() {
        this.commentsCounter(this.props.post.id)
        return(
            <li className="list-group-item clearfix" key={this.props.post.id}>
                <div className="margin-bottom10">
                    <Link to={`/${this.props.post.category}/${this.props.post.id}`} onClick={() => this.clicked(this.props.post.id)}>
                        {this.props.post.title}
                    </Link>
                    <br/>
                    {this.props.post.body}
                    <br/>
                    {this.props.post.author}
                </div>
                <div className="edit-buttons">
                    <Link to={`/${this.props.post.category}/${this.props.post.id}/edit`} className="btn btn-primary margin-right10" onClick={() => this.clicked(this.props.post.id)}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={() => this.deletePost(this.props.post)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    <span className="comments">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <span className="comments-distance">{this.state.commentcounter}</span>
                    </span>
                </div>

                <div className="vote-buttons">
                    <button className="btn btn-primary margin-right10" onClick={() => this.voted('downVote')}>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary margin-right10" onClick={() => this.voted('upVote')}>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </button>
                    <span>{this.props.post.voteScore}</span>
                </div>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedCategory: state.selectedCategory,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPost, fetchComments, fetchPosts, fetchPostsForCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);