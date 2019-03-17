import React from 'react'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

import {
  NotFoundPageContainer,
  NotFoundPageText,
  Row
} from './NotFoundPage.styles'

const backToHome = props => {
  const { history } = props
  history.push('/')
}

const NotFoundPage = props => {
  return (
    <NotFoundPageContainer>
      <Row>
        <i className="fas fa-exclamation-circle"></i>
        <NotFoundPageText>Esta página não existe</NotFoundPageText>
      </Row>
      <Row>
        <Button color="primary" onClick={() => backToHome(props)}>
          Voltar para home
        </Button>
      </Row>

    </NotFoundPageContainer>
  )
}

export default withRouter(NotFoundPage);
