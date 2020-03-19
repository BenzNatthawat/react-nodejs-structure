import axios from 'axios'
import { conf } from './config'

export const callApi = async () => {
  const authorization = localStorage.getItem('authorization')
  return axios.create({
    baseURL: conf.BASE_API_URL,
    headers: {
      'authorization': `Radabet ${authorization}`
    }
  })
}
