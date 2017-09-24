import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Mainview from './Mainview';
import '../styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="app container">
                <header className="col-md-12 text-center">
                    <h1>Readable 2</h1>
                </header>
                <Route exact path='/' render={() => (
                    <Mainview/>
                )}/>
            </div>
        )
    }
};

export default App;