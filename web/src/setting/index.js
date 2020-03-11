import axios from 'axios'
import { conf } from './config'

export const call = async () => {
  const _userLogin = localStorage.getItem('_userLogin')
  const token = _userLogin && JSON.parse(_userLogin).token
  return axios.create({
    baseURL: conf.BASE_API_URL,
    headers: {
      'Authorization': `Bearer ${token.replace(/"/g, '')}`
    }
  })
}
