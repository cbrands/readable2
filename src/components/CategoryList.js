import React from 'react';
import _ from "lodash";
import CategoryListItem from './CategoryListItem';

const CategoryList = (props) => {

    const categories = (props) => {
        let categoryArray = Object.values(props);
        return _.map(categoryArray, myCategories=> {
            return _.map(myCategories, insideCategories => {
                return _.map(insideCategories, category => {
                    return(<CategoryListItem category={category}/>);
                });
            });
        });
    }

    return(
        <ul className="list-group">
            {categories(props)}
        </ul>
    )
}

export default CategoryList;