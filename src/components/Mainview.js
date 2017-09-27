import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { Link, NavLink, withRouter } from "react-router-dom";
import { fetchCategories, fetchPosts, fetchPostsForCategory } from "../actions/index";
import PostListItem from './PostListItem';
import CategoryList from "./CategoryList";

class Mainview extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.getPosts();
        console.log('props', this.props);
    }

    getPosts = () => {
        if(this.props.match && this.props.match.url !== "/") {
            let myUrl = this.props.match.url.substring(1, );
            console.log('fetchposts for ', myUrl);
            this.props.fetchPostsForCategory(myUrl);
        } else {
            console.log('fetchposts');
            this.props.fetchPosts();
        }
        this.setState({key: Math.random()});
    }

    getPostsForPath = (pathName) => {
        let myUrl = pathName.substring(1, );
        if (myUrl === '') {
            this.props.fetchPosts();
        } else {
            this.props.fetchPostsForCategory(myUrl);
        }
    }


    componentWillUpdate() {
        console.log("HEY");
        console.log(this.props);
        //this.getPosts();
    }



    renderPosts() {
        return _.map(this.props.posts, post => {
            return (<PostListItem key={post.id} post={post}/>);
        });
    }

    render() {
        console.log("THERE");
        console.log(this.props);
        return (
            <div>
                <aside className="col-md-4 col-xs-12">
                    <h2>Categories</h2>
                    this.state.categories ??????
                    <CategoryList props={this.props.categories}/>

                    <Link to={`/`}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Mainview));