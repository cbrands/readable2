import React from 'react';
import _ from "lodash";
import PostListItem from './PostListItem';

const PostList = (props) => {

    const posts = (props) => {
        let postsArray = Object.values(props);
        return _.map(postsArray, myPosts => {
            return _.map(myPosts, post => {
                return (<PostListItem key={post.id} post={post}/>);
            });
        });
    }

    return(
        <ul className="list-group">
            {posts(props)}
        </ul>
    )
}

export default PostList;