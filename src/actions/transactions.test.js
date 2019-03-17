import { handleReceiveTransactions, handleSaveTransaction } from './transactions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const transactionMock = {
  description: "Débito", 
  value: "-3,50", 
  timestamp: Date.now(),
  id: '43a20d7ea3c08ddfd96d1552862704172',
}

import {
  RECEIVE_ALL_TRANSACTIONS,
  SAVE_TRANSACTION,
} from '../actions/transactions'

describe('transactions actions', () => {
  it('should dispatch receiveTransactions', () => {
    const receiveTransactoinsAction = {
      type: RECEIVE_ALL_TRANSACTIONS,
      transactions: null,
    }

    const store = mockStore({})

    store.dispatch(handleReceiveTransactions())

    expect(store.getActions()[0]).toEqual(receiveTransactoinsAction)
  })

  it('should dispatch saveTransactionAction', () => {
    const receiveTransactoinsAction = {
      type: SAVE_TRANSACTION,
    }

    // didn't compares the transaction because of the UI generation wich is always random
    const store = mockStore({})
    store.dispatch(handleSaveTransaction(transactionMock))

    expect(store.getActions()[0].type).toEqual(receiveTransactoinsAction.type)
  })
})
