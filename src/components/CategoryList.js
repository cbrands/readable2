import React from 'react';
import NewsItem from './news_list_item';

const CategoryList = (props) => {

    const categories = props.news.map((item) =>{
        return (
            <NewsItem key={item.id} item={item}/>
        )
    })

    return(
        <div>
            {categories}
        </div>
    )
}

export default CategoryList;