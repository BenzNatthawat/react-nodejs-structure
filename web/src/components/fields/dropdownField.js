import React from 'react'
import { Form } from 'semantic-ui-react'

const DropdownField = ({ input, placeholder, meta: { touched, error }, options, required }) => (
  <Form.Select
    label={placeholder}
    error={touched && error ? error : false}
    {...input}
    placeholder={placeholder}
    required={required}
    options={options}
  />
)

export default DropdownField
