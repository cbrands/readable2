import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost, fetchComments, voteOnPost } from "../actions/index";

class PostListItem extends Component {

    clicked(id) {
        this.props.fetchPost(id);
        this.props.fetchComments(id);
    }

    voted(option) {
        this.props.voteOnPost(this.props.post, option);
        //this.props.fetchComments(this.props.comment.parentId);
    }

    render() {
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
                    <button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    <span className="comments"><i className="fa fa-comments" aria-hidden="true"></i><span className="comments-distance">12</span></span>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPost, fetchComments, voteOnPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostListItem);