import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

import { styles, TransactionValue } from './TransactionItem.styles'

require('moment/locale/pt-br.js')
moment.locale('pt-BR')

const getTransactionStatus = val => {
  if(parseFloat(val) < 0) return 'negative'
  return 'positive'
}

const TransactionItem = props => {
  const { classes } = props
  const { transaction } = props
  const dateFormat = "D [de] MMMM YYYY, HH:mm:ss"
  const transactionStatus = getTransactionStatus(transaction.value)

  return (
    <Card 
      className={transactionStatus === 'negative' 
        ? `${classes.card} ${classes.cardNegative}`
        : classes.card
      }
    >
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {transaction.description}
        </Typography>
        <TransactionValue className={classes.value} status={transactionStatus}>
          R$ {transaction.value}
        </TransactionValue>
      </CardContent>
      <CardActions className={classes.dateContainer}>
        <Typography variant="caption" color="textSecondary">
          {moment(transaction.timestamp).format(dateFormat)}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(TransactionItem);
