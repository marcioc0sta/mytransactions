import { getTransactionList, saveTransaction } from '../api/myTransactionsApi'
import { guid } from '../helpers/generateTransactionId'

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS'
export const SAVE_TRANSACTION = 'SAVE_TRANSACTION'
export const ORDER_TRANSACTIONS_BY_DATE = 'ORDER_TRANSACTIONS_BY_DATE'
export const CALCULATE_TOTAL_OF_TRANSACTIONS = 'CALCULATE_TOTAL_OF_TRANSACTIONS'
export const ORDERED_BY_MONTH = 'ORDERED_BY_MONTH'
export const ORDERED_BY_YEAR = 'ORDERED_BY_YEAR'

const receiveTransactions = transactions => {
  return {
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions,
  }
}

export const orderPostsByDate = transactions => {
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

const calculateTotalOfTransactions = transactions => {
  return {
    type: CALCULATE_TOTAL_OF_TRANSACTIONS,
    transactions,
  }
}

export const orderTransactionsByMonth = transactions => {
  return {
    type: ORDERED_BY_MONTH,
    transactions,
  }
}

export const orderTransactionsByYear = transactions => {
  return {
    type: ORDERED_BY_YEAR,
    transactions,
  }
}

export const handleReceiveTransactions = () => {
  const transactionList = getTransactionList()
  return dispatch => {
    dispatch(receiveTransactions(transactionList))
    if (transactionList !== null) {
      dispatch(orderPostsByDate(transactionList))
      dispatch(calculateTotalOfTransactions(transactionList))
    }
  }
}

export const handleSaveTransaction = transaction => {
  const { description, value } = transaction
  const transactionObj = {
    description, 
    value,
    timestamp: Date.now(),
    id: guid(),
  }
  return dispatch => {
    dispatch(saveTransactionAction(transactionObj))
    saveTransaction(transactionObj)
  }
}
