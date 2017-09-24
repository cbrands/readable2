import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Mainview from './Mainview';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Mainview/>
                )}/>
            </div>
        )
    }
};

export default App;