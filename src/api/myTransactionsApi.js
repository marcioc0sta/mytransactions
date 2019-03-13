
const getTransactionList = () => {
  const transactionList = localStorage.getItem('transactionList')
  return transactionList;
}

const saveTransaction = transaction => {
  let transactionList = []
  transactionList = JSON.parse(localStorage.getItem('transactionList')) || []
  transactionList.push(transaction)
  localStorage.setItem('transactionList', JSON.stringify(transactionList))
}

export {
  saveTransaction,
  getTransactionList,
}
