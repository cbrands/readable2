import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { fetchCategories } from "../actions/index";


class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        let categoryArray = Object.values(this.props.categories);
        return _.map(categoryArray, myCategories=> {
            return _.map(myCategories, category => {
                return (
                    <li className="list-group-item" key={category.name}>
                        <Link to={`/categories/${category.path}`}>
                            {category.name}
                        </Link>
                    </li>
                );
            });
        });
    }

    render() {
        return (
            <aside className="col-md-4 col-xs-12">
                <h2>Categories</h2>

                <ul className="list-group">
                    {this.renderCategories()}
                </ul>
            </aside>
        )
    }
}

function mapStateToProps(state) {
    return { categories: state.categories };
}

function mapDispatchToProps(dispatch) {
    console.log("mapdispatch");
    return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);