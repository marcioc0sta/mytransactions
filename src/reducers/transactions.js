import { RECEIVE_ALL_TRANSACTIONS, SAVE_TRANSACTION } from '../actions/transactions'

const initialState = {
  list: []
}

export default function transactions (state=initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return {
        list: JSON.parse(action.transactions) || initialState.list
      }
    case SAVE_TRANSACTION:
      const currentList = state.list
      const updatedList = currentList.concat(action.transaction)
      return {
        list: updatedList
      }
    default:
      return state
  }
}
