import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = ({post}) => {
    return(
        <li className="list-group-item" key={post.id}>
            <Link to={`/${post.category}/${post.id}`}>
                {post.title}
            </Link>
        </li>
    );
}

export default PostListItem;