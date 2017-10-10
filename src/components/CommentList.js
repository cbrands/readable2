import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import CommentListItem from './CommentListItem';

class CommentList extends Component {
    comments = () => {
        let commentArray = Object.values(this.props.comments)
            .filter(comment => !comment.deleted)
            .sort((a, b) => {
                switch (this.props.commentSort) {
                    case 'score':
                        return a.voteScore - b.voteScore
                    case 'date':
                        return a.timestamp - b.timestamp
                    default:
                        return a.timestamp - b.timestamp
                }
            });
        return _.map(commentArray, comment => {
            return (<CommentListItem key={comment.id} comment={comment}/>);
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.comments()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
        commentSort: state.commentSort
    };
}

export default connect(mapStateToProps)(CommentList);