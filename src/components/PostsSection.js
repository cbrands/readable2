import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/index";

class PostsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log(this.props.posts);
        _.map(this.props.posts, post => {console.log(post)});
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <section className="col-md-8 col-xs-12">
                <h2>Posts</h2>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsSection);