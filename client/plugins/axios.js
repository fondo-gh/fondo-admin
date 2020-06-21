import axios from 'axios'

let token = ''
const user = JSON.parse(localStorage.getItem('fondoSync'))
if (user) {
  if (user.admin.currentUser !== null) {
    token = user.admin.currentUser.token
  } else {
    token = null
  }
} else {
  token = null
}
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

const client = axios.create({
  baseURL: 'http://fondo-app-gh.herokuapp.com/api/v1/admin',
  headers,
})

export default client
