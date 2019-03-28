import React from 'react'
import Button from '@material-ui/core/Button'

import { OrdererWrapper } from './Orderer.styles'
import { periods } from '../../helpers/orderPeriods'

const Orderer = props => {
  const { handleOrder, orderedBy } = props;

  return (
    <OrdererWrapper>
      <Button 
        onClick={() => handleOrder(periods.recent)} 
        color={orderedBy === periods.recent ? 'primary' : 'default'}
      >
        {periods.recent}
      </Button>
      <Button 
        onClick={() => handleOrder(periods.month)} 
        color={orderedBy === periods.month ? 'primary' : 'default'}
      >
        {periods.month}
      </Button>
      <Button 
        onClick={() => handleOrder(periods.year)} 
        color={orderedBy === periods.year ? 'primary' : 'default'}
      >
        {periods.year}
      </Button>
    </OrdererWrapper>
  )
}

export default Orderer;
