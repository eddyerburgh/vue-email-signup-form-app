<template>
    <form name="email-form" @submit.prevent="handleSubmit">
      <div>
        <label>Email</label>
        <div>
          <input
            name="email"
            type="email"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      email: null
    }),
    methods: {
      handleSubmit(event) {
        this.$httpCall(this.email)
      }
    }
  }
</script>
