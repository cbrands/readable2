import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import PostListItem from './PostListItem';

class PostList extends Component {

    posts = (props) => {
        let postsArray = Object.values(props);
        return _.map(postsArray, myPosts => {
            console.log('postlist', Object.values(myPosts));
            return _.map(myPosts, post => {
                console.log('post', post)
                return (<PostListItem key={post.id} post={post}/>);
            });
        });
    }

    render() {
        return(
            <ul className="list-group">
                {this.posts(this.props)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        postSort: state.postSort
    };
}

export default connect(mapStateToProps)(PostList);