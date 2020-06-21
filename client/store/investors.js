const state = () => ({
    investors: null,
    investordetail: null
  })
  
  const mutations = {
    setInvestor(state, payload) {
      state.investors = payload
    },
    getOneInvestor(state, id) {
      const investor = state.investors.find(data => data.id === id)
      state.investordetail = investor
    },
    setLoader(state, value) {
      state.loader = value
    }
  }
  
  const actions = {
    async getAllInvestors({ commit }) {
      commit('setLoader', true)
      try {
        const { data } = await this.$investors.allInvestors()
        console.log(data)
        commit('setInvestor', data.data)
        commit('setLoader', false)
      } catch (error) {
        console.log(error.response)
        commit('setLoader', false)
      }
    },
  
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }
  