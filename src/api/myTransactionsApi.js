const saveTransactions = transactions => {
  localStorage.setItem('transactionList', JSON.stringify(transactions));
}

const getTransactionList = () => {
  const transactionList = localStorage.getItem('transactionList');
  return transactionList;
}

export {
  saveTransactions,
  getTransactionList,
}
