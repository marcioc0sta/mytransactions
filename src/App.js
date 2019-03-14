import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TransactionList from './components/TransactionList/TransactionList'
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TransactionList} />
          <Route path="/add-transaction" component={AddTransactionForm} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App)
