<template>
  <form name="email-form" @submit.prevent="onSubmit">
     <h2 class="title is-2">Before you go</h2>
     <p class="subtitle is-5">How about subscribing?</p>
     <div class="field">
        <label class="label">Email</label>
        <div class="control">
           <input
              class="input"
              type="email"
              v-model="email"
              required="true"
              >
        </div>
     </div>
     <div class="field">
        <div class="control">
           <p class="help">Wanna enter the competition?</p>
           <label class="radio">
           <input
              v-model="enterCompetition"
              value="yes"
              type="radio"
              name="enterCompetition"
              />
           Yes
           </label>
           <label class="radio">
           <input
              v-model="enterCompetition"
              value="no"
              type="radio"
              name="enterCompetition"
              />
           No
           </label>
        </div>
     </div>
     <div class="field">
        <button
           type="submit"
           class="button is-primary"
           >Subscribe</button>
     </div>
  </form>
</template>

<script>

export default {
  data: () => ({
    email: null,
    enterCompetition: 'yes'
  }),
  methods: {
    onSubmit (event) {
      this.axios.post('http://demo7437963.mockable.io/validate', {
        email: this.email,
        enterCompetition: this.enterCompetition === 'yes'
      })
      this.$emit('form-submitted')
    }
  }
}
</script>
