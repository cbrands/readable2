import React from 'react';
import { NavLink} from "react-router-dom";

const CategoryListItem = ({category}) => {
    return(
        <li className="list-group-item" key={category.name} >
            <NavLink to={`/${category.path}`} onClick={console.log("clicked")}>
                {category.name}
            </NavLink>
        </li>
    );
}

export default CategoryListItem;