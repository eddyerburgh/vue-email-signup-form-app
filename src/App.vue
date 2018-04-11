<template>
  <div id="app">
    <img src="./assets/logo.png">
    <alternative-modal
      v-if="displayModal"
      v-on:close-modal="closeModal"
    >
      <Form />
  </alternative-modal>
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'
import AlternativeModal from './components/AlternativeModal'

export default {
  name: 'App',
  data: () => ({
    displayModal: true
  }),
  components: {
    Form,
    Modal,
    AlternativeModal
  },
  methods: {
    closeModal () {
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
