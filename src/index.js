import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux'
import bridge from './bridge'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))
// 原生redux 处理数据store
bridge(store)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();