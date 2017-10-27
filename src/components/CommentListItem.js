import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchComment, fetchComments } from "../actions/index";
import axios from 'axios';
import {api} from '../utils/Constants';
import { getHeaders } from '../utils/AuthorizationHelper';

class CommentListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    clicked(id) {
        this.props.fetchComment(id);
    }

    voted(option) {
        axios.post(`${api}/comments/${this.props.comment.id}`, { option }, getHeaders()).then((response) => {
            this.props.fetchComments(this.props.comment.parentId);
        });
    }

    deleteComment(commentId) {
        axios.delete(`${api}/comments/${commentId}`, getHeaders()).then((response) => {
            this.props.fetchComments(this.props.comment.parentId);
        });
    }

    render() {
        return(
            <li className="list-group-item clearfix" key={this.props.comment.id}>

                <div className="margin-bottom10">
                    {this.props.comment.author}
                    <br/>
                    {this.props.comment.body}
                </div>
                <div className="edit-buttons">
                    <Link to={`/comments/${this.props.comment.id}/edit`} className="btn btn-primary margin-right10"
                          onClick={() => this.clicked(this.props.comment.id)}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={() => this.deleteComment(this.props.comment.id)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="vote-buttons">
                    <button className="btn btn-primary margin-right10" onClick={() => this.voted('downVote')}>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary margin-right10" onClick={() => this.voted('upVote')}>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </button>
                    <span>{this.props.comment.voteScore}</span>
                </div>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        selectedCategory: state.selectedCategory
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchComment, fetchComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);