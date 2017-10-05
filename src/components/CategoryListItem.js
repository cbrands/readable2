import React, { Component } from 'react';
import { NavLink, Link} from "react-router-dom";

class CategoryListItem extends Component {
    clicked() {
        console.log("I am clicked", this.props.category.path);
        console.log('props', this.props);
    }
    render() {
        return (
            <li className="list-group-item" key={this.props.category.name}>
                {/*<NavLink to={`/${this.props.category.path}`} onClick={this.clicked()}>*/}
                    {/*{this.props.category.name}*/}
                {/*</NavLink>*/}
                <Link to={{
                    pathname: `/${this.props.category.path}`,
                    state: { fromDashboard: true }
                }} onClick={this.clicked()}>{this.props.category.name}</Link>
            </li>
        );
    }
}

export default CategoryListItem;