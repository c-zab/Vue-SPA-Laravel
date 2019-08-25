import Vue from 'vue'
import Navbar from './Navbar'

[
  Navbar
].forEach(Component => {
  Vue.component(Component.name, Component)
})
