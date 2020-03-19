import React from 'react'
import { Form } from 'semantic-ui-react'

const InputField = ({ input, placeholder, type, meta: { touched, error }, icon, iconPosition, autoComplete, required }) => (
  <Form.Input
    label={placeholder}
    error={touched && error ? error : false}
    {...input}
    placeholder={placeholder}
    type={type}
    icon={icon}
    iconPosition={iconPosition}
    autoComplete={autoComplete}
    required={required}
  />
)

export default InputField
