import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import styles from './Header.styles'

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Minhas transações
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
