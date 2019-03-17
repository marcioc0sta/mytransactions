import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

import { ErrorMessage, InputWrapper } from '../AddTransactionForm/AddTransactionForm.styles'

class TextInputValidator extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
    const { isValid } = this.state;

    return (
      <InputWrapper>
        <Tooltip title={rest.tooltipmessage} placement="top-start">
          <TextField
            fullWidth
            {...rest}
            error={!isValid}
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

export default TextInputValidator;
