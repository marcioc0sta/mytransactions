import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import NoTransactions from '../NoTransactions/NoTransactions'
import TransactionItem from '../TransactionItem/TransactionItem'
import {
  handleReceiveTransactions,
  orderTransactionsByMonth,
  orderTransactionsByYear,
  orderPostsByDate,
} from '../../actions/transactions'
import { numberToCurrencyString } from '../../helpers/numberToCurrencyString'
import { periods } from '../../helpers/orderPeriods'
import Orderer from '../Orderer/Orderer'
import CategorizedTransactions from '../CategorizedTransactions/CategorizedTransactions'
import { months } from '../../helpers/months'

import {
  Container,
  TransactionsWrapper,
  TotalContainer,
  TotalValueText,
  TotalValue,
} from './Transactionlist.styles'

class TransactionList extends Component {
  state = {
    orderedBy: periods.recent
  }

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

  handleOrder = orderMethod => {
    const { dispatch, transactions } = this.props
    const transactionList = JSON.stringify(transactions.list)

    this.setState({
      orderedBy: orderMethod
    }, () => {
      switch (orderMethod) {
        case periods.recent:
          return dispatch(orderPostsByDate(transactionList))
        case periods.month:
          return dispatch(orderTransactionsByMonth(transactionList))
        case periods.year:
          return dispatch(orderTransactionsByYear(transactionList))
        default:
          break;
      }
    })
  }

  render() {
    const { transactions } = this.props
    const { orderedBy } = this.state

    return (
      <Container>
        {transactions.list.length === 0 && <NoTransactions />}
        <Orderer handleOrder={this.handleOrder} orderedBy={orderedBy} />
        <TransactionsWrapper>
          {orderedBy === periods.recent && transactions.list.map(item => (
            <TransactionItem key={item.id} transaction={item} />
          ))}
          {orderedBy === periods.month
            && Object.keys(transactions.orderedByMonth).map(item => (
              <CategorizedTransactions
                key={item}
                transactionList={Object.values(transactions.orderedByMonth)[item]}
                category={months[item]}
              />
            ))
          }
          {orderedBy === periods.year
            && Object.keys(transactions.orderedByYear).map((item, index) => (
              <CategorizedTransactions
                key={item}
                transactionList={Object.values(transactions.orderedByYear)[index]}
                category={item}
              />
            ))
          }
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
