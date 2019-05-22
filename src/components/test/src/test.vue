
<template>
  <ul>
    <li>{{item}}<el-button>默认按钮</el-button></li>
  </ul>
</template>

<script>
  export default {
    name: 'IcyTest',
    props: {
      item: {
        type: String,
        default: 'hello icy'
      },
    }
  }
</script>

<style scoped lang="less">
  ul {
    background-color: gray;
    /* background-color: red; */
    li {
      color: red;
    }
  }
</style>
<style scoped lang="scss">
  ul {
    /* background-color: red; */
    li {
      color: red;
    }
  }
</style>
