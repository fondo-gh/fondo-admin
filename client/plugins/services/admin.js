import axios from './../axios'
const admin = {
  login: (payload) => {
    return axios.post('/login', payload)
  }
}

export default ({ app }, inject) => {
  inject('admin', admin)
}
