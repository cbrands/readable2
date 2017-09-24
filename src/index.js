import  React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store="{createStoreWithMiddleware(reducers)">
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.querySelector('#root')
    </Provider>
);