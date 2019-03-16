import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ValidatorForm } from 'react-form-validator-core'

import { handleSaveTransaction } from '../../actions/transactions'
import TextInputValidator from '../TextInputValidator/TextInputValidator'
import NumberInputValidator from '../NumberInputValidator/NumberInputValidator'
import { VALIDATION_MESSAGES } from '../../helpers/validationMessages'

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

  handleSubmit = () => {
    const { dispatch } = this.props
    const transaction = this.state
    dispatch(handleSaveTransaction(transaction))
    this.setState({
      description: '',
      value: '',
    })
  }

  isValueValid = () => {
    const { value } = this.state
    if(parseInt(value) === 0) return false
    return
  }

  render(){
    const { description, value } = this.state

    return(
      <div>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          <TextInputValidator 
            type="text" 
            placeholder="Transaction description"
            value={description}
            validators={['required']}
            errorMessages={[VALIDATION_MESSAGES.requiredField]}
            onChange={this.handleChange('description')}
          />
          <NumberInputValidator
            placeholder="value"
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
          <button type="submit">Salvar Transação</button>
        </ValidatorForm>
        <button onClick={this.goToList}>Voltar para lista</button>
      </div>
    )
  }
}

export default connect()(AddTransactionForm);
