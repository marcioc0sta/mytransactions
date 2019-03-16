import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TransactionItem from '../TransactionItem/TransactionItem'
import { handleReceiveTransactions } from '../../actions/transactions'

import { 
  Container,
  TransactionsWrapper, 
  TotalContainer,
} from './Transactionlist.styles'

class TransactionList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveTransactions())
  }

  goToAddTransaction = () => {
    const { history } = this.props
    history.push('/add-transaction')
  }

  toRealCurrencyString = num => `R$ ${num.toLocaleString('pt-BR')}`

  render(){
    const { transactions } = this.props

    return(
      <Container>
        <TransactionsWrapper>
          {transactions.list.map(item => (
            <TransactionItem key={item.id} transaction={item} />
          ))}
        </TransactionsWrapper>
        <hr/>
        <TotalContainer>
          <p>total: {this.toRealCurrencyString(transactions.total)}</p>
          <button onClick={this.goToAddTransaction}>Adicionar Transação</button>
        </TotalContainer>
      </Container>
    )
  }
}

const mapStateToProps = ({ transactions }) => {
  return {
    transactions
  }
}

export default withRouter(connect(mapStateToProps)(TransactionList));
