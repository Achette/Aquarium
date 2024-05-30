import axios from 'axios'
import { BASE_URL, USER_KEY } from '@/constants/system'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: BASE_URL,
})

instance.defaults.headers.common['Authorization'] = localStorage.getItem(USER_KEY)

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance
