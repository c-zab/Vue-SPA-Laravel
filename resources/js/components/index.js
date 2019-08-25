import Vue from 'vue'
import Navbar from './Navbar'
import Card from './Card'
import Button from './Button'
import { Form, HasError, AlertError } from 'vform'

[
  Navbar,
  Card,
  Button,
  Form,
  HasError,
  AlertError
].forEach(Component => {
  Vue.component(Component.name, Component)
})
