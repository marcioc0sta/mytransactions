import { currencyStringToNumber } from '../helpers/currencyStringToNumber'
import moment from 'moment'

import {
  RECEIVE_ALL_TRANSACTIONS,
  SAVE_TRANSACTION,
  ORDER_TRANSACTIONS_BY_DATE,
  CALCULATE_TOTAL_OF_TRANSACTIONS,
  ORDERED_BY_MONTH,
  ORDERED_BY_YEAR,
} from '../actions/transactions'

const initialState = {
  list: [],
  total: 0,
  orderedByMonth: {},
  orderedByYear:{},
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
      const values = state.list.map(({ value }) => currencyStringToNumber(value))
      return {
        ...state,
        total: values.reduce((initialVal, nextItem) => initialVal + nextItem),
      }
    case SAVE_TRANSACTION:
      const currentList = state.list
      const updatedList = currentList.concat(action.transaction)
      return {
        ...state,
        list: updatedList
      }
    case ORDERED_BY_MONTH:
      const transacitonsByMonth = state.list.reduce((transacitonsGroupByMonth, currentTransaction) => {
        const transacitonMonth = moment(currentTransaction.timestamp).month()
        const currentMonthTransactions = transacitonsGroupByMonth[transacitonMonth]
        return currentMonthTransactions
          ? {
            ...transacitonsGroupByMonth,
            [transacitonMonth]: [...currentMonthTransactions, currentTransaction],
          }
          : {
            ...transacitonsGroupByMonth,
            [transacitonMonth]: [currentTransaction]
          }

      }, {})

      return {
        ...state,
        orderedByMonth: transacitonsByMonth
      }
    case ORDERED_BY_YEAR:
      const year = new Date().getFullYear()
      const initialObj = {
        [year]: []
      }
      const transacitonsByYear = state.list.reduce((transacitonsGroupByYear, currentTransaction) => {
        const transacitonYear = moment(currentTransaction.timestamp).year()
        const currentYearTransactions = transacitonsGroupByYear[transacitonYear]
        return currentYearTransactions
          ? {
            ...transacitonsGroupByYear,
            [transacitonYear]: [...currentYearTransactions, currentTransaction],
          }
          : {
            ...transacitonsGroupByYear,
            [transacitonYear]: [currentTransaction]
          }

      }, initialObj)

      return {
        ...state,
        orderedByYear: transacitonsByYear
      }
    default:
      return state
  }
}
