
import Test from './components/test/index.js'

const components = [
  Test
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install, // 此方法用来批量注册全局组件
  Test,
}
