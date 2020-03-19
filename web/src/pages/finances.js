import React, { Component } from 'react'
import { Grid, Image, Message } from 'semantic-ui-react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FormLogin from '../components/formLogin'

class Finances extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = () => {
    const { values } = this.props.formLogin
    console.log(values)
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image size='massive' src={logo} />
          <FormLogin handleSubmit={this.handleSubmit} />
          <Message>
            <Link to={`${process.env.PUBLIC_URL}/register`}>สมัครสมาชิก</Link>
          </Message>
        </Grid.Column>
      </Grid >
    )
  }
}

const mapStateToProps = state => ({
  formLogin: state.form.FormLogin
})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Finances)