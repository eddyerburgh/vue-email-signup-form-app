<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-contents">
      <div class="box">
        <button
          @click="$emit('close-modal')"
          class="delete"
          aria-label="close">
        </button>
        <slot />
        </div>
      </div>
    </div>
</template>
