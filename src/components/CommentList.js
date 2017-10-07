import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import CommentListItem from './CommentListItem';

class CommentList extends Component {
    comments = (props) => {
        let commentArray = Object.values(props);
        return _.map(commentArray, myComments => {
            return _.map(myComments, comment => {
                return (<CommentListItem key={comment.id} comment={comment}/>);
            });
        });
    }

        render() {
        return (
            <ul className="list-group">
                {this.comments(this.props)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentList);