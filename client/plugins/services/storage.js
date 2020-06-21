import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'fondoSync',
      paths: ['admin.currentUser']
    })(store)
  })
}
