import styled from 'styled-components'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import lightGreen from '@material-ui/core/colors/lightGreen'

const Container = styled.div`
  padding: 30px;
`
const TransactionsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const TotalContainer = styled.div`
  align-items: center;
  background: ${grey[100]}
  border-radius: 4;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-left: solid 3px ${props => props.status === 'negative' ? red[700] : lightGreen[700]}
`

const TotalValueText = styled.p`
  font: 400 20px 'PT Sans';
  color: ${grey[800]}
`

const TotalValue = styled.span`
  font: 600 28px 'PT Sans';
  margin: 0 0 0 20px;
  color: ${props => props.status === 'negative' ? red[700] : lightGreen[700]}
`


export { 
  Container,
  TransactionsWrapper,
  TotalContainer,
  TotalValueText,
  TotalValue,
}
