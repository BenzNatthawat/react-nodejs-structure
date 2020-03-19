import React from 'react'
import { Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import InputField from './fields/inputField'

const validate = values => {
  const errors = {}
  if (!values.user_name) {
    errors.user_name = 'กรุณากรอกข้อมูล'
  } else if (values.user_name.length < 6) {
    errors.user_name = 'กรุณากรอกชื่อผู้ใช้ต้องมากกว่า 6 ตัวอักษร'
  }
  if (!values.password) {
    errors.password = 'กรุณากรอกข้อมูล'
  } else if (values.password.length < 8) {
    errors.password = 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร'
  }
  return errors
}

const FormLogin = ({ handleSubmit, pristine, reset, submitting, t, formLogin, handleSubmits }) => {
  return (
    <form className='ui form' onSubmit={handleSubmit}>
      <div className='ui stacked segment'>
        <Field type='text' name='user_name' component={InputField} fluid icon='user' iconPosition='left' placeholder={t('login.placeholder_username')} autoComplete='off' />
        <Field type='password' name='password' component={InputField} fluid icon='lock' iconPosition='left' placeholder={t('login.placeholder_password')} autoComplete='off' />
        <Button fluid disabled={submitting}>{t('login.btn_login')}</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formLogin',
  validate
})(FormLogin)
