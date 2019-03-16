import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

import { styles } from './TransactionItem.styles'

require('moment/locale/pt-br.js')
moment.locale('pt-BR')

const getTransactionColor = val => {
  if(parseFloat(val) < 0) return 'error'
  return 'primary'
}

const TransactionItem = props => {
  const { classes } = props
  const { transaction } = props
  const dateFormat = "D [de] MMMM YYYY, HH:mm:ss"

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {transaction.description}
        </Typography>
        <Typography className={classes.value} color={getTransactionColor(transaction.value)}>
          R$ {transaction.value}
        </Typography>
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
