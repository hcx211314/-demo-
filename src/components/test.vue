<template>
<div>
    <p>测试页面</p>
    <p>内部数据{{data}}</p>
    <button @click="dataAdd">点击增加1</button>
</div>
</template>
<script>
export default{
  data () {
    return {
      data: 1
    }
  },
  methods: {
    dataAdd () {
      this.data += 1
      this.$store.commit('increment')
    }
  }
}
</script>
