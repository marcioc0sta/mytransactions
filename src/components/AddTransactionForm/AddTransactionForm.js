import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ValidatorForm } from 'react-form-validator-core'
import Button from '@material-ui/core/Button'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextInputValidator from '../TextInputValidator/TextInputValidator'
import NumberInputValidator from '../NumberInputValidator/NumberInputValidator'
import { handleSaveTransaction } from '../../actions/transactions'
import { VALIDATION_MESSAGES, TOOLTIP_MESSAGES } from '../../helpers/formMessages'

import { FormContainer, FormActions, styles } from './AddTransactionForm.styles'

ValidatorForm.addValidationRule('isValueValid', value => {
  if (parseInt(value) === 0) {
    return false;
  }
  return true;
})

class AddTransactionForm extends Component {
  state = {
    description: '',
    value: '',
  }

  goToList = () => {
    const { history } = this.props
    history.push('/')
  }

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  notify = () => {
    toast.success("Sua transação foi salva!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  handleSubmit = () => {
    const { dispatch } = this.props
    const transaction = this.state
    dispatch(handleSaveTransaction(transaction))
    this.setState({
      description: '',
      value: '',
    })
    this.notify()
  }

  isValueValid = () => {
    const { value } = this.state
    if (parseInt(value) === 0) return false
    return
  }

  render() {
    const { description, value } = this.state

    return (
      <FormContainer>
        <ValidatorForm
          style={styles.form}
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <TextInputValidator
            type="text"
            placeholder="Descrição"
            tooltipmessage={TOOLTIP_MESSAGES.description}
            value={description}
            validators={['required']}
            errorMessages={[VALIDATION_MESSAGES.requiredField]}
            onChange={this.handleChange('description')}
          />
          <NumberInputValidator
            placeholder="Valor"
            tooltipmessage={TOOLTIP_MESSAGES.value}
            decimalScale={2}
            fixedDecimalScale
            thousandSeparator="."
            decimalSeparator=","
            value={value}
            validators={['required', 'isValueValid']}
            errorMessages={[
              VALIDATION_MESSAGES.requiredField,
              VALIDATION_MESSAGES.transactionZero,
            ]}
            onChange={this.handleChange('value')}
          />
          <FormActions>
            <Button
              color="default"
              variant="contained"
              onClick={this.goToList}
            >
              Voltar para lista
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Salvar Transação
            </Button>
          </FormActions>
        </ValidatorForm>
        <ToastContainer />
      </FormContainer>
    )
  }
}

export default connect()(AddTransactionForm);
