import React from 'react'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

import {
  NoTransactionsContainer,
  NoTransactionsText,
  Row
} from './NoTransactions.styles'

const goToAddTransaction = props => {
  const { history } = props
  history.push('/add-transaction')
}

const NoTransactions = props => {
  return (
    <NoTransactionsContainer>
      <Row>
        <i class="fas fa-exclamation-circle"></i>
        <NoTransactionsText>Você não tem nenhuma transação</NoTransactionsText>
      </Row>
      <Row>
        <Button color="primary" onClick={() => goToAddTransaction(props)}>
          Adicionar Transação
        </Button>
      </Row>

    </NoTransactionsContainer>
  )
}

export default withRouter(NoTransactions);
