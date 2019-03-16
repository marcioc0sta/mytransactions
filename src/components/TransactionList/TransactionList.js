import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveTransactions } from '../../actions/transactions'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
require('moment/locale/pt-br.js')
moment.locale('pt-BR')

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
    const dateFormat = "D [de] MMMM YYYY, HH:mm:ss"

    return(
      <div>
        <ul>
          {transactions.list.map(item => <li key={item.id}>{item.value} <small> {moment(item.timestamp).format(dateFormat)}</small></li>)}
        </ul>
        <button onClick={this.goToAddTransaction}>Adicionar Transação</button>
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
