import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    cachedViews: [],
    visitedViews: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addCashedViesw (state, value) {
      if (state.cachedViews.includes(value.name)) return
      state.cachedViews.push(value.name)
    },
    addVisitedViews (state, value) {
      const index = state.visitedViews.findIndex(v => v.path === value.path)
      if (index !== -1) {
        state.visitedViews.splice(index, 1, Object.assign({}, value, {
          title: value.meta.title || 'no-name'
        }))
      } else {
        state.visitedViews.push(
          Object.assign({}, value, {
            title: value.meta.title || 'no-name'
          })
        )
      }
    }
  }
})

export default store
