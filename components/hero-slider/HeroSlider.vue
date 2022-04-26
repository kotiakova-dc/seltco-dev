<template>
  <div>
    <div>
      <!-- Using modifiers -->
      <b-button v-b-modal.my-modal>Show Modal</b-button>

      <!-- Using value -->
      <b-button v-b-modal="'my-modal'">Show Modal</b-button>

      <!-- The modal -->
    </div>
  </div>
</template>

<script>
import ModalLarge from "@/components/ModalLarge";
import ModalMedium from "@/components/ModalMedium";
export default {
  components: {
    ModalLarge,
    ModalMedium,
  },
};
</script>

<style lang="scss"></style>
