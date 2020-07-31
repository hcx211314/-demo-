<template>
  <div id="app">
    <span class="classa" @click="test1('/')">
      去helloWord
    </span>
    <span class="classa" @click="test1('/test')">
      测试页面1
    </span>
    <span class="classa" @click="test1('/test1')">
      测试页面2
    </span>
    <keep-alive>
      <router-view :key="key"/>
    </keep-alive>

    <div class="tags-con">
      <span v-for="(item,index) in $store.state.cachedViews" :key="index">
        {{item}}
      </span>
      <p>------------------</p>
      <div>
          多标签：
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
      >
        {{ tag.title }}--{{tag.query}}
      </router-link>
      </div>
    </div>
    cashedViews:{{ this.$store.state.cachedViews }}
    <!-- <p>visitedViews:{{this.$store.state.visitedViews}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key () {
      return this.$route.fullPath
    },
    visitedViews () {
      return this.$store.state.visitedViews
    }
  },
  watch: {
    $route () {
      console.log('我检测到路有变化了')
      this.addTags()
    }
  },
  mounted () {
    this.addTags()
  },
  methods: {
    test1 (path) {
      this.$router.push({
        path,
        query: {
          t: +new Date() // 保证每次点击路由的query项都是不一样的，确保会重新刷新view
        }
      })
    },
    addTags () {
      console.log(this.$route, 'route')
      const { name } = this.$route
      if (name) {
        this.$store.commit('addCashedViesw', this.$route)
        this.$store.commit('addVisitedViews', this.$route)
      }
      return false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
.tags-con{
  margin-top:20px;
  border:1px solid red;
}
.tags-view-item{
  border:1px solid blue;
}
.classa{
  cursor:pointer;
  border:1px solid blue;
}
</style>
