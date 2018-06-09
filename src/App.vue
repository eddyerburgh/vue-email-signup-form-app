<template>
  <div>
    <Modal
      v-if="displayModal"
      :onClose="closeModal"
    >
      <Form v-on:form-submitted="closeModal" />
    </Modal>
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'

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
    closeModal () {
      this.displayModal = false
    }
  }
}
</script>
