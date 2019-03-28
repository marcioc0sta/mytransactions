import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import TransactionItem from '../TransactionItem/TransactionItem'
import { 
  Section, 
  styles,
  TransactionsWrapper
} from './CategorizedTransactions.styles'

const CategorizedTransactions = props => {
  const { classes, transactionList, category } = props
  return (
    <Section>
      <Typography className={classes.title} color="textSecondary">
        {category}
      </Typography>
      <TransactionsWrapper>
        {transactionList.map(item => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </TransactionsWrapper>
    </Section>
  )
}

export default withStyles(styles)(CategorizedTransactions)
