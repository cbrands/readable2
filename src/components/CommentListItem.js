import React from 'react';
import { Link } from "react-router-dom";

const CommentListItem = ({comment}) => {
    return(
        <li className="list-group-item clearfix" key={comment.id}>
            <div className="margin-bottom10">
                {comment.author}
                <br/>
                {comment.body}
            </div>
            <div className="edit-buttons">
                <button className="btn btn-primary margin-right10"><i className="fa fa-pencil" aria-hidden="true"></i></button>
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

export default CommentListItem;