import React from 'react'
import { Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import InputField from './fields/inputField'
import DropdownField from './fields/dropdownField'

const validate = values => {
  const errors = {}
  if (!values.user_name) {
    errors.user_name = 'กรุณากรอกข้อมูล'
  } else if (values.user_name.length < 4) {
    errors.user_name = 'กรุณากรอกชื่อผู้ใช้ต้องมากกว่า 6 ตัวอักษร'
  }
  if (!values.password) {
    errors.password = 'กรุณากรอกข้อมูล'
  } else if (values.password.length < 6) {
    errors.password = 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร'
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'กรุณากรอกข้อมูล'
  } else if (values.passwordConfirm.length < 6) {
    errors.passwordConfirm = 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร'
  }
  if(values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'รหัสผ่านไม่ตรงกัน'
  }
  if (values.telephone && values.telephone.length !== 10) {
    errors.telephone = 'กรุณากรอกเบอร์โทรศัพท์ 10 ตัวอักษร'
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'ที่อยู่อีเมลที่ไม่ถูกต้อง'
  }
  if (!values.first_name) {
    errors.first_name = 'กรุณากรอกข้อมูล'
  }
  if (!values.last_name) {
    errors.last_name = 'กรุณากรอกข้อมูล'
  }
  if (!values.bank_name) {
    errors.bank_name = 'กรุณากรอกข้อมูล'
  } else if (values.bank_name.length < 8) {
    errors.bank_name = 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร'
  }
  if (!values.account_number) {
    errors.account_number = 'กรุณากรอกข้อมูล'
  } else if (values.account_number.length < 8) {
    errors.account_number = 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร'
  }
  return errors
}

const bankOptions = [
  {
    key: 'SCB',
    text: 'SCB',
    value: 'SCB',
    image: { avatar: true, src: require(`../assets/images/bank/SCB.png`) },
  },
  {
    key: 'KBANK',
    text: 'KBANK',
    value: 'KBANK',
    image: { avatar: true, src: require(`../assets/images/bank/KBANK.png`) },
  },
  {
    key: 'BBL',
    text: 'BBL',
    value: 'BBL',
    image: { avatar: true, src: require(`../assets/images/bank/BBL.png`) },
  },
  {
    key: 'KTB',
    text: 'KTB',
    value: 'KTB',
    image: { avatar: true, src: require(`../assets/images/bank/KTB.png`) },
  }
]

let FormRegister = ({ handleSubmit, pristine, t, status, nextStatus }) => {
  console.log(pristine)
  return (
    <form className='ui form left aligned' onSubmit={(e) => e.preventDefault()}>
      <div className='ui stacked segment'>
        {status === 1 && <>
          <Field type='text' name='user_name' component={InputField} fluid icon='user' iconPosition='left' placeholder={t('register.placeholder_username')} autoComplete='off' required />
          <Field type='password' name='password' component={InputField} fluid icon='lock' iconPosition='left' placeholder={t('register.placeholder_password')} autoComplete='off' required />
          <Field type='password' name='passwordConfirm' component={InputField} fluid icon='lock' iconPosition='left' placeholder={t('register.placeholder_passwordConfirm')} autoComplete='off' required />
          <Field type='text' name='telephone' component={InputField} fluid icon='phone' iconPosition='left' placeholder={t('register.placeholder_telephone')} autoComplete='off' />
          <Field type='mail' name='email' component={InputField} fluid icon='envelope' iconPosition='left' placeholder={t('register.placeholder_email')} autoComplete='off' />
          <Button fluid onClick={nextStatus}>{t('register.btn_next')}</Button>
        </>}
        {status === 2 && <>
          <Field type='text' name='first_name' component={InputField} fluid icon='address book' iconPosition='left' placeholder={t('register.placeholder_first_name')} autoComplete='off' required />
          <Field type='text' name='last_name' component={InputField} fluid icon='address book' iconPosition='left' placeholder={t('register.placeholder_last_name')} autoComplete='off' required />
          <Field type='text' name='bank_name' component={DropdownField} fluid placeholder={t('register.placeholder_bank_name')} options={bankOptions} required />
          <Field type='text' name='account_number' component={InputField} fluid icon='university' iconPosition='left' placeholder={t('register.placeholder_account_number')} autoComplete='off' options={bankOptions} required />
          <Button fluid disabled={pristine} onClick={handleSubmit}>{t('register.btn_register')}</Button>
        </>}
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'FormRegister',
  validate
})(FormRegister)
