import React, { Component } from 'react';
import {fetchCategoriesFromServer} from '../utils/Backend';


class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.fetchCategories();
    }

    fetchCategories = () => {
        fetchCategoriesFromServer().then((categories) => this.setState({categories}));
    }

    render() {
        const { categories } = this.state;
        console.log('hey!');
        console.log('categories', categories);
        return (
            <aside className="col-md-4 col-xs-12">
                <h2>Categories</h2>

                <ul>
                    {console.log('categories2', categories)}
                    {/*{*/}
                        {/*categories.forEach((category) => {<li key={category}>okidoki</li>})*/}
                    {/*}*/}
                    {/*{categories && categories.map((category) => (*/}
                        {/*<li key={category}>okidoki</li>*/}
                    {/*))}*/}
                </ul>
            </aside>
        )
    }
}


export default Aside