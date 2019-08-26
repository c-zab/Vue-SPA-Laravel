import Vue from 'vue'
import Navbar from './Navbar'
import Card from './Card'
import Button from './Button'
import File from './File'
import { Form, HasError, AlertError } from 'vform'

[
  Navbar,
  Card,
  Button,
  File,
  Form,
  HasError,
  AlertError
].forEach(Component => {
  Vue.component(Component.name, Component)
})
