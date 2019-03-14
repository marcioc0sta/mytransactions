import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveTransactions } from '../../actions/transactions'
import { withRouter } from 'react-router-dom'

class TransactionList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveTransactions())
  }

  goToAddTransaction = () => {
    const { history } = this.props
    history.push('/add-transaction')
  }

  render(){
    const { transactions } = this.props
    return(
      <div>
        <ul>
          {transactions.list.map(item => <li key={item.id}>{item.val}</li>)}
        </ul>
        <button onClick={this.goToAddTransaction}>Add transaction</button>
      </div>
    )
  }
}

const mapStateToProps = ({ transactions }) => {
  return {
    transactions
  }
}

export default withRouter(connect(mapStateToProps)(TransactionList));
