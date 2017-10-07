import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { fetchPost } from "../actions/index";

class Postview extends Component {
    // componentDidMount() {
    //     //this.props.fetchPost();
    // }

    render() {
        const myPost = Object.values(this.props.post)[0];
        console.log('myPost', myPost);
        if(!myPost) {
            return(null);
        } else {
            return (
                <div className="container">
                    <div className="col-md-12 text-center">
                        <h3>Post: {myPost.title}</h3>
                    </div>
                    <div className="col-md-12 clearfix">
                        <label>{myPost.title}</label>
                        <div>{myPost.body}</div>
                        <div className="margin-bottom10">{myPost.author}</div>
                        <div className="edit-buttons">
                            <button className="btn btn-primary margin-right10"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                        </div>
                        <div className="vote-buttons">
                            <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                            <button className="btn btn-primary margin-right10"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                            <span>12</span>
                        </div>
                    </div>
                    <Link to={`/`} className="col-md-12">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                </div>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        selectedCategory: state.selectedCategory
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPost }, dispatch);
// }

export default connect(mapStateToProps, null)(Postview);