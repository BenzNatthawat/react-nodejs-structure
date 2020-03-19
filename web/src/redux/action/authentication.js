
import serviceAuthentication from '../../service/authentication'

export default {
  login: (data) => async (dispatch) => {
    try {
      const response = await serviceAuthentication.login(data)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log('action_login', error)
    }
  },
  register: (data) => async (dispatch) => {
    try {
      const response = await serviceAuthentication.login(data)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log('action_register', error)
    }
  },
  checkTokenExpiration: (data) => async (dispatch) => {
    try {
      const response = await serviceAuthentication.login(data)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log('action_checkToken', error)
    }
  }
}
