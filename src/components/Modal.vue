<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <button
          class="delete is-pulled-right"
          @click="$emit('close-modal')"
        />
        <slot />
      </div>
    </div>
  </div>
</template>
