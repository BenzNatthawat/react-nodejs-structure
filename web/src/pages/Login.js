import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Message } from 'semantic-ui-react'
import logo from '../assets/images/logo.png'
import { connect } from 'react-redux'
import FormLogin from '../components/formLogin'
import authentication from '../redux/action/authentication'
import { withTranslation } from 'react-i18next'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit = () => {
    // const { values } = this.props.formLogin
    console.log(this.props.formLogin)
    // this.props.login(values)
  }

  render() {
    const { t, formLogin } = this.props
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <Image size='massive' src={logo} /> */}
          <FormLogin onSubmit={this.onSubmit} t={t} formLogin={formLogin} />
          <Message>
            <Link to={`${process.env.PUBLIC_URL}/register`}>{t('register.btn_register')}</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  formLogin: state.form.formLogin
})

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(authentication.login(data))
})

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Login))