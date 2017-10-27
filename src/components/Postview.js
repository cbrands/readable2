import React, { Component } from 'react';
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import CommentList from './CommentList';
import { bindActionCreators } from "redux";
import { setCommentSort, fetchPost} from "../actions/index";
import axios from 'axios';
import {api} from '../utils/Constants';
import { getHeaders } from '../utils/AuthorizationHelper';

class Postview extends Component {
    componentDidMount() {
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    voted(post, option) {
        axios.post(`${api}/posts/${post.id}`, { option }, getHeaders()).then((response) => {
            this.props.fetchPost(post.id);
        });
    }

    handleSortChange(event) {
        this.props.setCommentSort(event.target.value);
    }

    deletePost(post) {
        axios.get(`${api}/posts/${post.id}/comments`, getHeaders()).then((response) => {
            response.data.forEach((acomment) => {
                axios.delete(`${api}/comments/${acomment.id}`, getHeaders());
            })
        });
        axios.delete(`${api}/posts/${post.id}`, getHeaders()).then((response) => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log('props = ', this.props);
        const myPost = Object.values(this.props.post)[0];
        if(!myPost) {
            return(null);
        } else {
            return (
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h3>Post: {myPost.title}</h3>
                    </div>
                    <div className="col-md-12 clearfix">
                        <label>{myPost.title}</label>
                        <div>{myPost.body}</div>
                        <div className="margin-bottom10">{myPost.author}</div>
                        <div className="edit-buttons">
                            <Link to={`/${myPost.category}/${myPost.id}/edit`} className="btn btn-primary margin-right10"><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                            <Link to={`/`} className="btn btn-danger" onClick={() => this.deletePost(myPost)}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="vote-buttons">
                            <button className="btn btn-primary margin-right10" onClick={() => this.voted(myPost, 'downVote')}>
                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-primary margin-right10" onClick={() => this.voted(myPost, 'upVote')}>
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                            </button>
                            <span>{myPost.voteScore}</span>
                        </div>
                    </div>
                    <Link to={`/`} className="col-md-12">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                    <div className="col-md-12">
                        <div className="margin-bottom10">
                            <h2 className="text-center">Comments</h2>
                            <Link to={'/comments/new'} className="btn btn-primary margin-right10">
                                New Comment <i className="fa fa-plus" aria-hidden="true"></i>
                            </Link>
                            <label className="btn btn-primary">
                                Sort option:
                                <select className="btn btn-primary" value={this.props.commentSort} onChange={this.handleSortChange}>
                                    <option value="date">Sort by date</option>
                                    <option value="score">Sort by score</option>
                                </select>
                            </label>
                        </div>
                        <CommentList/>
                    </div>
                </div>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        selectedCategory: state.selectedCategory,
        commentSort: state.commentSort
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setCommentSort, fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postview);