import transactions from './transactions';
import { 
  RECEIVE_ALL_TRANSACTIONS,
  SAVE_TRANSACTION,
  ORDER_TRANSACTIONS_BY_DATE,
  CALCULATE_TOTAL_OF_TRANSACTIONS,
} from '../actions/transactions'

const mockTransactionList = [
  {description: "test", value: "200", timestamp: 1552610116044, id: "9c1a02abed49368b394e"},
  {description: "teste", value: "-100", timestamp: 1552610359401, id: "0f8f3729486a71f76ced"},
  {description: "teste123123", value: "-22.50", timestamp: 1552610470726, id: "6c07854b4af420094a01"}
]

describe('transactions reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = {"list": [], "total": 0}
    expect(transactions(undefined, {})).toEqual(expectedResult)
  })

  it('should handle transactions',  () => {
    const receiveTransactoinsAction = {
      type: RECEIVE_ALL_TRANSACTIONS,
      transactions: JSON.stringify(mockTransactionList),
    }
    const expectedResult =  {"list": [...mockTransactionList],}
    expect(transactions({}, receiveTransactoinsAction)).toEqual(expectedResult);
  })

  it('should add a new transaction', () => {
    const newTransactionMock = {
      description: "test2",
      value: "2020",
      timestamp: 1552613204727,
      id: "e012181c4e90d891b4e8"
    }
    const saveTransactionsAction = {
      type: SAVE_TRANSACTION,
      transaction: newTransactionMock,
    }
    const expectedResult =  {"list": [...mockTransactionList, newTransactionMock],}
    expect(transactions({list: [...mockTransactionList]}, saveTransactionsAction))
      .toEqual(expectedResult);
  })

  it('should order transactions by date', () => {
    const orderTransactionsAction = {
      type: ORDER_TRANSACTIONS_BY_DATE,
      transactions: JSON.stringify(mockTransactionList),
    }
    const expectedResult = {
      list: mockTransactionList.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
      }),
    }
    expect(transactions({list: [...mockTransactionList]}, orderTransactionsAction))
    .toEqual(expectedResult);
  })

  it('should calculate total of transactions', () => {
    const caltulateTotalAction = {
      type: CALCULATE_TOTAL_OF_TRANSACTIONS,
      transactions: JSON.stringify(mockTransactionList),
    }

    const expectedResult = {
      list: [...mockTransactionList],
      total: 77.50
    }

    expect(transactions({list: [...mockTransactionList]}, caltulateTotalAction))
    .toEqual(expectedResult);
  })
})
