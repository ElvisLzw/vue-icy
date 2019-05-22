
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

<style scoped>
  ul {
    /* background-color: red; */
  }
  ul li {
    list-style: decimal;
  }
</style>
