import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchComment, voteOnComment, fetchComments, deleteComment } from "../actions/index";

class CommentListItem extends Component {
    clicked(id) {
        this.props.fetchComment(id);
    }

    voted(option) {
        this.props.voteOnComment(this.props.comment, option);
        this.props.fetchComments(this.props.comment.parentId);
    }

    deleteComment() {
        this.props.deleteComment(this.props.comment.id);
        this.props.fetchComments(this.props.comment.parentId);
    }

    render() {
        console.log('commenting', this.props.com);
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
                    <button className="btn btn-danger" onClick={() => this.deleteComment()}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchComment, voteOnComment, fetchComments, deleteComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentListItem);