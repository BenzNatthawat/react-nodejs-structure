import React, { Component } from 'react'
import NavBar from './itemMenu'

export default class Menu extends Component {
  render() {
    const leftItems = [
      { as: 'a', content: 'หน้าแรก', key: 'home' },
      { as: 'a', content: 'การเงิน', key: 'users' }
    ];
    const rightItems = [
      { as: 'a', content: 'Login', key: 'login' },
      { as: 'a', content: 'Register', key: 'register' }
    ];
    return (
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          การบ้าน
          <b>การบ้าน</b>
          <i>การบ้าน</i>
          <em>การบ้าน</em>
        </p>
      </NavBar>
    )
  }
}
