import React, { Fragment } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';

 const Input = ({ onChangeText, onBlur, value, label, keyboardType, error }) => { 
    
    return (
      <Fragment>
        <TextInput
          label={label}
          keyboardType={keyboardType === "visible-password" ? "default" : keyboardType}
          mode={'outlined'}
          // theme={{ roundness: 5 }}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={keyboardType === "visible-password"}
          error={error}
        />
        <HelperText type="error" visible={error}>
              {error}
        </HelperText>
      </Fragment>
    );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  keyboardType: 'default',
};

export default Input;