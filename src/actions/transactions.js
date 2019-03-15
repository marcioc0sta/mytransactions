import { getTransactionList, saveTransaction } from '../api/myTransactionsApi'

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS'
export const SAVE_TRANSACTION = 'SAVE_TRANSACTION'

const receiveTransactions = transactions => {
  return {
    type: RECEIVE_ALL_TRANSACTIONS,
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
  return dispatch => {
    dispatch(receiveTransactions(getTransactionList()))
  }
}

export const handleSaveTransaction = transaction => {
  return dispatch => {
    dispatch(saveTransactionAction(transaction))
    saveTransaction(transaction)
  }
}
