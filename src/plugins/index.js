import FiltersPlugin from './filters'

export default {
  install (Vue, { store, router, vuetify }) {
    Vue.use(FiltersPlugin)
  }
}
