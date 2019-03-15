import { 
  RECEIVE_ALL_TRANSACTIONS,
  SAVE_TRANSACTION,
  ORDER_TRANSACTIONS_BY_DATE,
} from '../actions/transactions'

const initialState = {
  list: []
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return {
        list: JSON.parse(action.transactions) || initialState.list
      }
    case ORDER_TRANSACTIONS_BY_DATE:
      const orderedByTime = JSON.parse(action.transactions).sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
      });
      return {
        list: [...orderedByTime],
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
