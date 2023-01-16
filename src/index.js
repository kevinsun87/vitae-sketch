import Loading from '../packages/loading/index'
import Badge from '../packages/badge/index'

const components = [Loading, Badge]

const install = function (Vue) {
  if (install.installed) return

  components.forEach(function (component) {
    Vue.component(component.name, component)
  })
}

if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Loading,
  Badge,
}
