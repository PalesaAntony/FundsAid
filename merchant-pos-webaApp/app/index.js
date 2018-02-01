import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import Styling from './index.css'
import App from './components/app'
const middleware = applyMiddleware(thunk);
const store = createStore(
  reducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

);
ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)