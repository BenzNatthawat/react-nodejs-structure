import { callApi } from '../setting/index'

export default {
  login: async (data) => {
    try {
      return await callApi().then((send) => send.post('/login', data))
        .catch((err) => {
          return err.response
        })
    } catch (err) {
      console.log('service_login', err)
    }
  }
}
