import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = ({post}) => {
    return(
        <li className="list-group-item clearfix" key={post.id}>
            <div className="margin-bottom10">
                <Link to={`/${post.category}/${post.id}`}>
                    {post.title}
                    {console.log('post', post)}
                </Link>
                <br/>
                {post.body}
                <br/>
                {post.author}
            </div>
            <div className="edit-buttons">
                <button className="btn btn-primary margin-right10"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <span className="comments"><i className="fa fa-comments" aria-hidden="true"></i><span className="comments-distance">12</span></span>
            </div>

            <div className="vote-buttons">
                <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                <span>{post.voteScore}</span>
            </div>
        </li>
    );
}

export default PostListItem;