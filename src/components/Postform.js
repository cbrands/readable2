import React, { Component } from 'react';
import { connect } from "react-redux";
import generateUUID from '../utils/UuidGenerator';

class Postform extends Component {
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

    render(){
        console.log('postformprops', this.props);
        let myPost = this.completePost();
        return(
            <div className="container">
                <div className="col-md-12 text-center">
                    <h3>Edit post</h3>
                </div>
                <form className="col-md-12">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" value="Lorem ipsum dolor" />
                    </div>
                    <div className="form-group">
                        <label>Post text</label>
                        <textarea name="body" className="form-control" rows="8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                        </textarea>
                    </div>
                    <button className="btn btn-primary">Cancel</button>
                    <button className="btn btn-primary">Save</button>
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