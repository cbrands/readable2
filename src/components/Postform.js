import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { newPost, editPost } from "../actions/index";
import generateUUID from '../utils/UuidGenerator';
import isEmpty from '../utils/EmptyCheck';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            bodyValue: '',
            authorValue: '',
            redirect: false
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
    }

    componentDidUpdate() {
        if(!isEmpty(this.props.post)) {
            if(this.state.titleValue === ''){
                let myPost = Object.values(this.props.post)[0];
                this.setState({titleValue: myPost.title});
            }
            if(this.state.bodyValue === ''){
                let myPost = Object.values(this.props.post)[0];
                this.setState({bodyValue: myPost.body});
            }
            if(this.state.authorValue === ''){
                let myPost = Object.values(this.props.post)[0];
                this.setState({authorValue: myPost.author});
            }
        }
    }

    completePost() {
        if (this.state.isNew) {
            let newPost = {};
            newPost.id = generateUUID();
            newPost.deleted = false;
            newPost.voteScore = 0;
            newPost.title = "";
            newPost.body = "";
            newPost.author = "";
            newPost.timestamp = Date.now();
            newPost.category = this.props.selectedCategory;
            return newPost;
        } else {
            return Object.values(this.props.post)[0];
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
        let myPost = this.completePost();
        myPost.title = this.state.titleValue;
        myPost.body = this.state.bodyValue;
        myPost.author = this.state.authorValue;
        if (this.state.isNew) {
            this.props.newPost(myPost);
        } else {
            this.props.editPost(myPost);
        }
        this.setState({ redirect: true });
    }

    render(){
        return(
            <div className="container">
                {this.state.redirect && <Redirect to={'/'} />}
                <div className="col-md-12 text-center">
                    {this.state.isNew ? <h3>New post</h3> : <h3>Edit post</h3>}
                </div>
                <form className="col-md-12" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label><br/>
                        <input type="text" value={this.state.titleValue} size="95"
                               onChange={this.handleTitleChange} placeholder="title" />
                    </div>
                    <div className="form-group">
                        <label>Post text</label>
                        <textarea className="form-control" rows="8" value={this.state.bodyValue} cols="95"
                                  onChange={this.handleBodyChange} placeholder="message"/>
                    </div>
                    <div className="form-group">
                        <label>Author</label><br/>
                        <input type="text" value={this.state.authorValue} size="95"
                               onChange={this.handleAuthorChange} placeholder="author name"/>
                    </div>
                    <Link to={"/"} className="btn btn-primary margin-right10">Cancel</Link>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newPost, editPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postform);