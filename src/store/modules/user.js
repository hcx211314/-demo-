const user = {
  namespaced: true,
  state: () => ({ user: 3 }),
  mutations: {
    changeUser (state) {
      state.user += 1
    }
  },
  actions: {
    asyncChnageUser (context) {
      context.commit('changeUser')
    }
  },
  getters: {
    getUserAge: state => state.user + '岁'
  }
}
export default user
