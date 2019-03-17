import styled from 'styled-components'
import grey from '@material-ui/core/colors/grey'

const NotFoundPageContainer = styled.div`
  color: ${grey[500]}
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10% 0;
  
  i {
    font-size: 50px
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 30px 0;
  justify-content: center;
  width: 100%;
`

const NotFoundPageText = styled.p`
  font: 400 20px 'PT Sans';
  margin: 0 0 0 20px;
`

export {
  NotFoundPageContainer,
  NotFoundPageText,
  Row,
}
