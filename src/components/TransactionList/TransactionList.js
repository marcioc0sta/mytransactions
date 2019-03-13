import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveTransactions } from '../../actions/transactions'

class TransactionList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveTransactions());
  }

  render(){
    console.log(this.props.transactions)
    return(
      <div>
        <ul>
          {this.props.transactions.list.map(item => <li key={item.id}>{item.val}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ transactions }) => {
  return {
    transactions
  }
}

export default connect(mapStateToProps)(TransactionList);
