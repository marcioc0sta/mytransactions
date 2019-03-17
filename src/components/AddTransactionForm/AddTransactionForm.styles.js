import styled from 'styled-components'
import red from '@material-ui/core/colors/red';

const ErrorMessage = styled.div`
  font: 400 12px 'PT Sans';
  color: ${red[500]}
  margin: 5px 0 0 0;
`

const InputWrapper = styled.div`
  margin: 0 0 30px 0;
`

const FormContainer = styled.div`
  margin: 30px auto;
  width: 95%;
`

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
`

const styles = {
  form: {
    width: '50%',
    margin: '0 auto',
    paddingTop: 30,
    paddingBottom: 30,
  }
}

export { 
  FormContainer,
  ErrorMessage,
  InputWrapper,
  FormActions,
  styles,
}
