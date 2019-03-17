import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import { styles, HeaderTitle } from './Header.styles'

const goToHome = props => props.history.push('/')

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <HeaderTitle 
            onClick={() => goToHome(props)}
            color="inherit"
          >
            Minhas transações
        </HeaderTitle>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(withStyles(styles)(Header))
