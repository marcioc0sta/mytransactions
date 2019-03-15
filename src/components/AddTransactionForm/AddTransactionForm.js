import React, { Component } from 'react'
import { guid } from '../../helpers/generateTransactionId'
import { connect } from 'react-redux'
import { handleSaveTransaction } from '../../actions/transactions'
import NumberFormat from 'react-number-format'

class AddTransactionForm extends Component {
  state = {
    description: '',
    value: '',
    timestamp: Date.now(),
    id: guid(),
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

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const transaction = this.state
    dispatch(handleSaveTransaction(transaction))
  }

  render(){
    const { description } = this.state

    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            type="text" 
            required 
            placeholder="Transaction description"
            value={description}
            onChange={this.handleChange('description')}
          />
          <NumberFormat
            isNumericString
            required
            placeholder="value"
            fixedDecimalScale
            decimalScale={2}
            thousandSeparator="."
            decimalSeparator=","
            onChange={this.handleChange('value')}
          />
          <button type="submit">Save transaction</button>
        </form>
        <button onClick={this.goToList}>Back to list</button>
      </div>
    )
  }
}

export default connect()(AddTransactionForm);
