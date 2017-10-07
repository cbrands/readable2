import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchCategories, fetchPosts, fetchPostsForCategory, selectCategory } from "../actions/index";
import PostList from './PostList';
import CategoryList from "./CategoryList";

class Mainview extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.getPosts();
    }

    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    getPosts = () => {
        if (this.isEmpty(this.props.selectedCategory)) {
            const pathName = this.props.location.pathname;
            if (pathName === "/") {
                this.props.selectCategory("home");
                this.props.fetchPosts();
            } else {
                this.props.selectCategory(pathName.substr(1,));
                this.props.fetchPostsForCategory(pathName.substr(1,));
            }
        } else if (this.props.selectedCategory === 'home') {
            this.props.fetchPosts();
        } else {
            this.props.fetchPostsForCategory(this.props.selectedCategory);
        }
    }

    homeClicked = () => {
        this.props.selectCategory("home");
        this.props.fetchPosts();
    }

    render() {
        console.log("THERE");
        console.log(this.props);
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
                    <h2>Posts</h2>
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