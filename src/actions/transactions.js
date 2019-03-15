import { getTransactionList, saveTransaction } from '../api/myTransactionsApi'

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS'
export const SAVE_TRANSACTION = 'SAVE_TRANSACTION'
export const ORDER_TRANSACTIONS_BY_DATE = 'ORDER_TRANSACTIONS_BY_DATE'

const receiveTransactions = transactions => {
  return {
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions,
  }
}

const orderPostsByDate = transactions => {
  return {
    type: ORDER_TRANSACTIONS_BY_DATE,
    transactions,
  }
}

const saveTransactionAction = transaction => {
  return {
    type: SAVE_TRANSACTION,
    transaction,
  }
}

export const handleReceiveTransactions = () => {
  const transactionList = getTransactionList()
  return dispatch => {
    dispatch(receiveTransactions(transactionList))
    if(transactionList !== null) {
      dispatch(orderPostsByDate(transactionList))
    }
  }
}

export const handleSaveTransaction = transaction => {
  return dispatch => {
    dispatch(saveTransactionAction(transaction))
    saveTransaction(transaction)
  }
}
