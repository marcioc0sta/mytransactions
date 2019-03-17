import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import NoTransactions from '../NoTransactions/NoTransactions'
import TransactionItem from '../TransactionItem/TransactionItem'
import { handleReceiveTransactions } from '../../actions/transactions'
import { numberToCurrencyString } from '../../helpers/numberToCurrencyString'

import {
  Container,
  TransactionsWrapper,
  TotalContainer,
  TotalValueText,
  TotalValue,
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

  toRealCurrencyString = num => `R$ ${numberToCurrencyString(num)}`

  getTransactionStatus = val => {
    if (parseFloat(val) < 0) return 'negative'
    return 'positive'
  }

  render() {
    const { transactions } = this.props

    return (
      <Container>
        {transactions.list.length === 0 && <NoTransactions />}
        <TransactionsWrapper>
          {transactions.list.map(item => (
            <TransactionItem key={item.id} transaction={item} />
          ))}
        </TransactionsWrapper>
        {transactions.list.length > 0 &&
          <TotalContainer status={this.getTransactionStatus(transactions.total)}>
            <Button
              color="primary"
              onClick={this.goToAddTransaction}
              variant="contained"
            >
              Adicionar Transação
            </Button>
            <TotalValueText>
              Seu saldo:
              <TotalValue status={this.getTransactionStatus(transactions.total)}>
                {this.toRealCurrencyString(transactions.total)}
              </TotalValue>
            </TotalValueText>
          </TotalContainer>
        }
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
