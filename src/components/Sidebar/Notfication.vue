<!-- Notification.vue -->
<template>
  <div class="notification" v-if="notification">
    {{ notification.message }}
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
.notification {
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
