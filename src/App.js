import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TransactionList from './components/TransactionList/TransactionList'
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={TransactionList} />
            <Route path="/add-transaction" component={AddTransactionForm} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
