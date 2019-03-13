import { getTransactionList } from '../api/myTransactionsApi'

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS'

const receiveTransactions = transactions => {
  return {
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions,
  }
}

export const handleReceiveTransactions = () => {
  return dispatch => {
    dispatch(receiveTransactions(getTransactionList()))
  }
}
