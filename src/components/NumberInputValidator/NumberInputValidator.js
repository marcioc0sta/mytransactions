import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

import { ErrorMessage, InputWrapper } from '../AddTransactionForm/AddTransactionForm.styles'

class NumberInputValidator extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
    const { isValid } = this.state;

    return (
      <InputWrapper>
        <Tooltip title={rest.tooltipmessage} placement="top-start">
          <NumberFormat
            fullWidth
            error={!isValid}
            customInput={TextField}
            {...rest}
            ref={(r) => { this.input = r; }}
          />
        </Tooltip>
        {this.errorText()}
      </InputWrapper>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <ErrorMessage>
        {this.getErrorMessage()}
      </ErrorMessage>
    );
  }
}

export default NumberInputValidator;
