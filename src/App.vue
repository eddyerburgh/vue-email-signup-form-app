<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Modal :visible="displayModal" :onClose="closeModal">
      <div>
      <Form/>
    </div>
    </Modal>
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'
import 'bulma/css/bulma.css'

export default {
  name: 'App',
  data: () => ({
    displayModal: true
  }),
  components: {
    Form,
    Modal
  },
  methods: {
    closeModal() {
      this.displayModal = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
