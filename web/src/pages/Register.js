import React, { Component } from 'react'
import { Grid, Image, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import FormRegister from '../components/formRegister'
import logo from '../assets/images/logo.png'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 1
    }
  }

  handleSubmit = () => {
    const { values } = this.props.formLogin
    console.log(values)
  }

  nextStatus = () => {
    this.setState({ status: this.state.status + 1 })
  }
  render() {
    const { status } = this.state
    const { t } = this.props
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <Image size='massive' src={logo} /> */}
          <FormRegister handleSubmit={this.handleSubmit} t={t} status={status} nextStatus={this.nextStatus} />
          <Message>
            <Link to={`${process.env.PUBLIC_URL}/login`}>{t('login.btn_login')}</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  formLogin: state.form.FormLogin
})

const mapDispatchToProps = dispatch => {
  return {}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Register))