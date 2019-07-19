import React, { Fragment, useState, useEffect } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import PropTypes from 'prop-types';

 const Input = ({ onChangeText, onBlur, value, label, keyboardType, error }) => { 

  const [showPassword, setShowPassword] = useState(true);
  const handleToggle = () => setShowPassword(!showPassword);

    return (
      <Fragment>
        <TextInput
          label={label}
          keyboardType={keyboardType === "visible-password" ? "default" : keyboardType}
          mode={'outlined'}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={(showPassword) && keyboardType === "visible-password"}
          error={error}
        />
        
        { keyboardType != 'visible-password' ? 
          <View style={{ opacity: 0 }}>
            <TouchableOpacity
              style={[styles.viewTextButton]}
            >
              <Text>View</Text>
            </TouchableOpacity>
          </View> 
          : 
        <View style={[styles.viewTextContainer]}>
          <TouchableOpacity
            style={{backgroundColor: '#ffff'}}
            onPress={() => handleToggle()}
          >
            <Text style={{ color:"#6393c5"}}>View</Text>
          </TouchableOpacity>
        </View>
        }
        
        <HelperText type="error" visible={error}>
              {error}
        </HelperText>

      </Fragment>
    );
};

const styles = StyleSheet.create({

	viewTextContainer: {
		position: 'absolute',
		top: 25,
    right: 15,
    zIndex: 10
  },
});


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