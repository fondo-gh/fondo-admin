import axios from './../axios'
const startups = {
  allStartups: () => {
    return axios.get('/startups')
  },
  startupDetail: (id) => {
    return axios.get(`/startups/${id}/startup_detail`)
  },
  contactDetail: (id) => {
    return axios.get(`/startups/${id}/contact_detail`)
  },
  businessModel: (id) => {
    return axios.get(`/startups/${id}/business_model`)
  },
  productDetail: (id) => {
    return axios.get(`/startups/${id}/product_detail`)
  },
  cofounderDetail: (id) => {
    return axios.get(`/startups/${id}/cofounder_detail`)
  },
  startupTeam: (id) => {
    return axios.get(`/startups/${id}/startup_team`)
  },
  approveStartup: (id) => {
    return axios.post(`/startup/approve`, {startup_id: parseInt(id, 10)})
  }
}

export default ({ app }, inject) => {
  inject('startups', startups)
}
