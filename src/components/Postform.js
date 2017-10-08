import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import generateUUID from '../utils/UuidGenerator';
import {selectCategory} from "../actions/index";

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            bodyValue: '',
            authorValue: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let isNew;
        if (this.props.location.pathname.substr(-3, 3) === 'new') {
            isNew = true;
        } else {
            isNew = false;
        }
        this.setState({ isNew });
        console.log('postform', isNew);
    }

    completePost() {
        if (this.state.isNew) {
            let newPost = {};
            newPost.id = generateUUID();
            newPost.deleted = false;
            newPost. voteScore = 0;
            newPost.title = "";
            newPost.body = "";
            newPost.author = "";
            newPost.timestamp = Date.now();
            newPost.category = this.props.selectedCategory;
            return newPost;
        } else {
            return this.props.post;
        }
    }

    handleTitleChange(event) {
        this.setState({titleValue: event.target.value});
    }

    handleBodyChange(event) {
        this.setState({bodyValue: event.target.value});
    }

    handleAuthorChange(event) {
        this.setState({authorValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //todo submit form
        alert('WOOOOOOOOO');
    }

    render(){
        console.log('postformprops', this.props);
        let myPost = this.completePost();
        console.log('myPost', myPost);
        return(
            <div className="container">
                <div className="col-md-12 text-center">
                    {this.state.isNew ? <h3>New post</h3> : <h3>Edit post</h3>}
                </div>
                <form className="col-md-12" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label><br/>
                        <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} />
                    </div>
                    <div className="form-group">
                        <label>Post text</label>
                        <textarea className="form-control" rows="8" value={this.state.bodyValue} onChange={this.handleBodyChange}/>
                    </div>
                    <div className="form-group">
                        <label>Author</label><br/>
                        <input type="text" value={this.state.authorValue} onChange={this.handleAuthorChange} />
                    </div>
                    <Link to={"/"} className="btn btn-primary margin-right10">Cancel</Link>
                    {/*<button className="btn btn-primary">Save</button>*/}
                    <input className="btn btn-primary" type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        comments: state.comments,
        selectedCategory: state.selectedCategory
    };
}

export default connect(mapStateToProps)(Postform);