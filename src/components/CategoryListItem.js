import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../actions/index";

class CategoryListItem extends Component {
    clicked() {
        this.props.selectCategory(this.props.category.path);
        this.props.fetchPostsForCategory(this.props.selectedCategory);
    }

    render() {
        return (
            <li className="list-group-item" key={this.props.category.name} >
                <NavLink to={`/${this.props.category.path}`} onClick={() => this.clicked()}>
                    {this.props.category.name}
                </NavLink>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (data) => dispatch(selectCategory(data))
    }
}

export default connect(null, mapDispatchToProps)(CategoryListItem);