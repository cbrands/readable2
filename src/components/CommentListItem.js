import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchComment } from "../actions/index";

class CommentListItem extends Component {
    clicked(id) {
        this.props.fetchComment(id);
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
                    <button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
                <div className="vote-buttons">
                    <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                    <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                    {/*<span>{post.voteScore}</span>*/}
                </div>
            </li>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentListItem);