import { RECEIVE_ALL_TRANSACTIONS } from '../actions/transactions'

const initialState = {
  list: []
}

export default function transactions (state=initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return {
        list: JSON.parse(action.transactions) || initialState.list
      }
    default:
      return state
  }
}
