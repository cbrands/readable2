import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Mainview from './Mainview';
import Postview from './Postview';
import Postform from './Postform';
import Commentform from './Commentform';
import '../styles/app.css';

class App extends Component {

    render() {
        return (
            <div className="app container">
                <header className="col-md-12 text-center">
                    <h1>Readable 2</h1>
                </header>
                <Switch>
                    <Route path='/comments/new' component={Commentform} />
                    <Route path='/comments/:id/edit' component={Commentform} />
                    <Route path='/:category/new' component={Postform} />
                    <Route path='/:category/:id/edit' component={Postform} />
                    <Route path='/:category/:id' component={Postview}  />
                    <Route path='/:category' component={Mainview}  />
                    <Route path="/" component={Mainview}  />
                </Switch>
            </div>
        )
    }
};

export default App;