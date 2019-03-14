import React, { Component } from 'react'
import { guid } from '../../helpers/generateTransactionId'

class AddTransactionForm extends Component {
  state = {
    description: '',
    value: null,
    timestamp: Date.now(),
    id: guid(),
  }
  render(){
    return(
      <div>
        <form action="">
          <input type="text" required placeholder="Transaction description"/>
          <input type="number" required placeholder="value"/>
        </form>
      </div>
    )
  }
}

export default AddTransactionForm;
