import * as yup from 'yup'
import { Formik } from 'formik'
import React from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import MyButton from './common/Button';
import PropTypes from 'prop-types';


 const Form = ({loginStepOne}) => {
   return (
    <Formik 
    initialValues={{ employeeNumber: ''}}
    onSubmit={values => loginStepOne(values)}
    validationSchema={
      yup.object().shape({
      employeeNumber: yup
        .number()
        .required("Employee number is required")
    })}
    >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={{ width: '35%', justifyContent: 'space-around'}}>
            <Input 
            onChangeText={handleChange('employeeNumber')}
            onBlur={() => setFieldTouched('EmployeeNumber')}
            value={values.employeeNumber}
            label='Enter employee number #' 
            keyboardType="visible-password"
            error={touched.employeeNumber && errors.employeeNumber ? errors.employeeNumber : ''}
            />
          <View style={{marginTop: 20}}>
            <MyButton
            text="Continue"
            disabled={!isValid}
            onPress={handleSubmit}
            backgroundColor="#6393c5"
            />
          </View>
          </View>
        )}
   </Formik>
   );
 }

 Form.propTypes = {
  loginStepOne: PropTypes.func.isRequired
 }
 
export default Form;