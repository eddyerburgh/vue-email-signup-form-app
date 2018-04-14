<template>
  <div>
    <modal
      v-if="displayModal"
      @click="closeModal"
    >
      <Form v-on:form-submitted="closeModal" />
    </modal>
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
