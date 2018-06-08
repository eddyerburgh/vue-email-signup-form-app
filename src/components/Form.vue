<template>
  <form name="email-form" @submit.prevent="onSubmit">
    <h2 class="title is-2 has-text-centered">Before you go</h2>
    <p class="subtitle is-5 has-text-centered">How about subscribing?</p>
    <div class="field is-grouped">
      <div class="control has-icons-left is-expanded">
        <input
          type="email"
          v-model="email"
          class="input is-medium is-flat"
          placeholder="email address"
          required="true"
          />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <div class="control">
        <button
          type="submit"
          name="email-form"
          class="button is-medium is-link">
        <strong>Subscribe</strong>
        </button>
      </div>
    </div>
    <div class="field">
      <div class="control has-text-centered">
        <p class="help has-text-centered">Enter the competition?</p>
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
