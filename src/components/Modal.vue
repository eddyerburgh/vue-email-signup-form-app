<template>
  <div v-if="visible" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-contents">
      <div class="box">
        <button
          @click="onClose"
          class="delete"
          aria-label="close">
        </button>
        <slot />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['visible', 'onClose']
}
</script>
