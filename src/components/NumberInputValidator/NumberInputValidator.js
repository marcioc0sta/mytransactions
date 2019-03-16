import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import NumberFormat from 'react-number-format'

class NumberInputValidator extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
    return (
      <div>
        <NumberFormat
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <div style={{ color: 'red' }}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default NumberInputValidator;
