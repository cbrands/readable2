import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import PostListItem from './PostListItem';

class PostList extends Component {

    posts = () => {
        let postsArray = Object.values(this.props.posts)
            .filter(comment => !comment.deleted)
            .sort((a, b) => {
                switch (this.props.postSort) {
                    case 'score':
                        return a.voteScore - b.voteScore
                    case 'date':
                        return a.timestamp - b.timestamp
                    default:
                        return a.timestamp - b.timestamp
                }
            });
        return _.map(postsArray, post => {
            return (<PostListItem key={post.id} post={post}/>);
        });
    }

    render() {
        return(
            <ul className="list-group">
                {this.posts()}
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