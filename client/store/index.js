import feathersClient from '../feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'
import { getField, updateField } from 'vuex-map-fields'
import createPersistedState from 'vuex-persistedstate'

// Theme custom store
// mport theme from './theme/'

createPersistedState({
  key: 'fondoSync',
  paths: ['auth.currentUser']
})

export const mutations = {
  updateField,
}
export const getters = {
  getField,
}

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

export const state = () => ({})

export const actions = {
  nuxtServerInit({ commit, dispatch }, { req }) {
    return initAuth({
      commit,
      dispatch,
      req,
      moduleName: 'auth',
      cookieName: 'feathers-jwt',
    })
  },
}

export const plugins = [
  service('users'),
  service('mails'),
  service('events'),
  service('rooms'),
  service('messages'),
  service('interactions'),
  auth({
    state: { publicPages: ['index', 'authenticate'] },
    userService: 'users',
  }),
]

