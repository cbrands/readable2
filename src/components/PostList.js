import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import PostListItem from './PostListItem';

class PostList extends Component {

    posts = (props) => {
        console.log('postlistprops', props);
        let postsArray = Object.values(props);
        return _.map(postsArray, myPosts => {
            return _.map(myPosts, post => {
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
        posts: state.posts
    };
}

export default connect(mapStateToProps)(PostList);