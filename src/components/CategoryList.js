import React, { Component } from 'react';
import _ from "lodash";
import CategoryListItem from './CategoryListItem';
import { connect } from "react-redux";

class CategoryList extends Component {

    categories = (props) => {
        let categoryArray = Object.values(props);
        return _.map(categoryArray, myCategories=> {
            return _.map(myCategories, insideCategories => {
                return _.map(insideCategories, category => {
                    return(<CategoryListItem category={category}/>);
                });
            });
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.categories(this.props)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps)(CategoryList);