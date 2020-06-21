import axios from './../axios'
const investors = {
  allInvestors: () => {
    return axios.get('/investors')
  },
}

export default ({ app }, inject) => {
  inject('investors', investors)
}
