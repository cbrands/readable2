import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchCategories, fetchPosts, fetchPostsForCategory, selectCategory } from "../actions/index";
import PostList from './PostList';
import CategoryList from "./CategoryList";
import '../styles/app.css';

class Mainview extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.getPosts();
    }

    getPosts = () => {
        const pathName = this.props.location.pathname;
        if (pathName === "/") {
            this.props.selectCategory("home");
            this.props.fetchPosts();
        } else {
            this.props.selectCategory(pathName.substr(1,));
            this.props.fetchPostsForCategory(pathName.substr(1,));
        }
    }

    homeClicked = () => {
        this.props.selectCategory("home");
        this.props.fetchPosts();
    }

    render() {
        const myPath = this.props.location.pathname;
        return (
            <div>
                <aside className="col-md-4 col-xs-12">
                    <h2>Categories</h2>
                    <CategoryList/>
                    <Link to={`/`} onClick={() => this.homeClicked()}>
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                </aside>
                <section className="col-md-8 col-xs-12">
                    <div className="margin-bottom10">
                        <h2 className="text-center">Posts</h2>
                        {myPath !== "/" &&
                            <Link to={`/${this.props.selectedCategory}/new`} className="btn btn-primary margin-right10">
                                New Post <i className="fa fa-plus" aria-hidden="true"></i>
                            </Link>
                        }
                        <button className="btn btn-primary">
                            Sort by <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                    </div>
                    <PostList/>
                </section>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        categories: state.categories,
        posts: state.posts,
        selectedCategory: state.selectedCategory
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCategories, fetchPosts, fetchPostsForCategory, selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainview);