import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { Link, NavLink, withRouter } from "react-router-dom";
import { fetchCategories, fetchPosts, fetchPostsForCategory } from "../actions/index";

class Mainview extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.getPosts();
    }

    getPosts = () => {
        if(this.props.match && this.props.match.url !== "/") {
            let myUrl = this.props.match.url.substring(1, );
            console.log('fetchposts for ', myUrl);
            this.props.fetchPostsForCategory(myUrl);
            this.setState({myUrl: myUrl});
        } else {
            console.log('fetchposts');
            this.props.fetchPosts();
            this.setState({myUrl: ''});
        }

    }

    componentWillUpdate() {
        //this.getPosts();
    }

    renderCategories() {
        let categoryArray = Object.values(this.props.categories);
        return _.map(categoryArray, myCategories=> {
            return _.map(myCategories, category => {
                return (
                    <li className="list-group-item" key={category.name}>
                        <NavLink to={`/${category.path}`} onClick={this.getPosts}>
                            {category.name}
                        </NavLink>
                    </li>
                );
            });
        });
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/${post.category}/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        const currentLocation = this.props.match.location;
        console.log(currentLocation);
        //console.log('mv-props2', this.props);
        return (
            <div>
                <aside className="col-md-4 col-xs-12">
                    <h2>Categories</h2>

                    <ul className="list-group">
                        {this.renderCategories()}
                    </ul>
                    <Link to={{pathname: `/`, state: {selectedCategory: 'All'}}}>
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                </aside>
                <section className="col-md-8 col-xs-12">
                    <h2>Posts</h2>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </section>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        categories: state.categories,
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCategories, fetchPosts, fetchPostsForCategory }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mainview));