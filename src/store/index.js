import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user.js'
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    countNum: 100,
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
  },
  actions: {
    increment (context) {
      // context.commit('increment')
      setTimeout(function () { context.commit('increment') }, 2000)
    }
  },
  getters: {
    doneTodos: state => {
      return state.countNum + state.count
    },
    getUserAge: state => {
      return state.user.user + '这么多岁'
    }
  },
  modules
})

export default store
