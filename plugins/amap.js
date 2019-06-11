import Vue from 'vue'
import VueAMap from 'vue-amap'
export default () => {
  Vue.use(VueAMap, {})
}
VueAMap.initAMapApiLoader({
  // 高德key
  key: '4787ea264f105ce9ffee4a5f23e72bf4',
  // 插件集合 （插件按需引入）
  plugin: []
})
