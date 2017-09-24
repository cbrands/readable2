import React, { Component } from 'react';

class PostsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        const { posts } = this.state;
        console.log('posts', posts);
        return (
            <section className="col-md-8 col-xs-12">
                <h2>Posts</h2>
            </section>
        )
    }
}

export default PostsSection