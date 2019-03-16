import styled from 'styled-components'
import red from '@material-ui/core/colors/red'
import lightGreen from '@material-ui/core/colors/lightGreen'

const TransactionValue = styled.div`
  font-family: 'PT Sans';
  color: ${props => props.status === 'negative' ? red[700] : lightGreen[700]}
`

const styles = {
  card: {
    width: '30%',
    padding: 10,
    marginRight: 20,
    marginBottom: 20,
    borderLeftStyle: 'solid',
    borderLeftWidth: '3px',
    borderLeftColor: lightGreen[700],
  },
  cardNegative: {
    borderLeftColor: red[700],
  },
  title: {
    fontSize: 24,
  },
  value: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 12,
  },
  dateContainer: {
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
  }
};

export { styles, TransactionValue }
