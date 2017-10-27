import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { newComment, editComment } from "../actions/index";
import generateUUID from '../utils/UuidGenerator';
import isEmpty from '../utils/EmptyCheck';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyValue: '',
            authorValue: '',
            redirect: false
        }

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
        if(!isEmpty(this.props.comment)) {
            if(this.state.bodyValue === ''){
                let myComment = Object.values(this.props.comment)[0];
                this.setState({bodyValue: myComment.body});
            }
            if(this.state.authorValue === ''){
                let myComment = Object.values(this.props.comment)[0];
                this.setState({authorValue: myComment.author});
            }
        }
    }

    completeComment() {
        if (this.state.isNew) {
            let myPost = Object.values(this.props.post)[0];
            let newComment = {};
            newComment.id = generateUUID();
            newComment.deleted = false;
            newComment.voteScore = 0;
            newComment.body = "";
            newComment.author = "";
            newComment.timestamp = Date.now();
            newComment.parentId = myPost.id;
            newComment.parentDeleted = false;
            return newComment;
        } else {
            return Object.values(this.props.comment)[0];
        }
    }

    handleBodyChange(event) {
        this.setState({bodyValue: event.target.value});
    }

    handleAuthorChange(event) {
        this.setState({authorValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let myComment = this.completeComment();
        myComment.body = this.state.bodyValue;
        myComment.author = this.state.authorValue;
        if (this.state.isNew) {
            this.props.newComment(myComment);
        } else {
            this.props.editComment(myComment);
        }
        this.setState({ redirect: true });
    }

    render(){
        return(
            <div className="container">
                {this.state.redirect && <Redirect to={'/'} />}
                <div className="col-md-12 text-center">
                    {this.state.isNew ? <h3>New comment</h3> : <h3>Edit comment</h3>}
                </div>
                <form className="col-md-12" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Comment text</label>
                        <textarea className="form-control" rows="8" value={this.state.bodyValue} cols="95"
                                  onChange={this.handleBodyChange} placeholder="comment"/>
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
        comment: state.comment
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newComment, editComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postform);