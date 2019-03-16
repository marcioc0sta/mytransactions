import { currencyStringToNumber } from '../helpers/currencyStringToNumber'

import {
  RECEIVE_ALL_TRANSACTIONS,
  SAVE_TRANSACTION,
  ORDER_TRANSACTIONS_BY_DATE,
  CALCULATE_TOTAL_OF_TRANSACTIONS,
} from '../actions/transactions'

const initialState = {
  list: [],
  total: '',
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return {
        ...state,
        list: JSON.parse(action.transactions) || initialState.list
      }
    case ORDER_TRANSACTIONS_BY_DATE:
      const orderedByTime = JSON.parse(action.transactions).sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
      });
      return {
        ...state,
        list: [...orderedByTime],
      }
    case CALCULATE_TOTAL_OF_TRANSACTIONS:
      const values = state.list.map(transaction => {
        return (
          currencyStringToNumber(transaction.value)
        )
      })
      return {
        ...state,
        total: values.reduce((part_sum, a) => part_sum + a),
      }
    case SAVE_TRANSACTION:
      const currentList = state.list
      const updatedList = currentList.concat(action.transaction)
      return {
        ...state,
        list: updatedList
      }
    default:
      return state
  }
}
