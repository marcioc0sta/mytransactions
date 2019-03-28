import styled from 'styled-components'
import grey from '@material-ui/core/colors/grey'

const Section = styled.div`
  width: 100%
`

const TransactionsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const styles = {
  title: {
    fontSize: 20,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: grey[200],
    marginBottom: 10,
  },
};

export { Section, styles, TransactionsWrapper}
