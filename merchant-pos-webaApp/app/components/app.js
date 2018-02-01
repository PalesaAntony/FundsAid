import React from 'react'
import ReactRouter from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PurchaseForm from './PurchaseForm'


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={PurchaseForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}