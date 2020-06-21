const state = () => ({
  startups: null,
  startupbasic: null,
  startupdetail: null,
  contactdetail: null,
  businessmodel: null,
  productdetail: null,
  cofounderdetail: null,
  startupteam: null,
  loader: false,
  approveloader: false,
})

const mutations = {
  setStartup(state, payload) {
    state[payload.type] = payload.data1
  },
  setLoader(state, value) {
    state.loader = value
  },
  setApproveLoader(state, value) {
    state.approveloader = value
  },
  getBasic(state, value) {
    if(state.startups) {
      const result = state.startups.find((data) => data.id === parseInt(value, 10))
      state.startupbasic = result
    }
  },
}

const actions = {
  async getAllStartups({ commit }) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.allStartups()
      console.log(data)
      const stateData = {
        type: 'startups',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async getDetails({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.startupDetail(payload)
      const stateData = {
        type: 'startupdetail',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async getContacts({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.contactDetail(payload)
      const stateData = {
        type: 'contactdetail',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async businessModel({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.businessModel(payload)
      const stateData = {
        type: 'businessmodel',
        data1: data.data,
      }
      commit('setStartup', stateData)
    } catch (error) {
      console.log(error.response)
    }
  },

  async productDetails({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.productDetail(payload)
      const stateData = {
        type: 'productdetail',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async cofounderDetails({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.cofounderDetail(payload)
      const stateData = {
        type: 'cofounderdetail',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async startupTeam({ commit }, payload) {
    commit('setLoader', true)
    try {
      const { data } = await this.$startups.startupTeam(payload)
      const stateData = {
        type: 'startupteam',
        data1: data.data,
      }
      commit('setStartup', stateData)
      commit('setLoader', false)
    } catch (error) {
      console.log(error.response)
      commit('setLoader', false)
    }
  },

  async approveStartup({ commit }, payload) {
    commit('setApproveLoader', true)
    try {
      const { data } = await this.$startups.approveStartup(payload)
      console.log(data)
      this._vm.$toasted.show('Selected Startup has been approved', {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000,
      })
      commit('setApproveLoader', false)
    } catch (error) {
      console.log(error)
      commit('setApproveLoader', false)
    }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
