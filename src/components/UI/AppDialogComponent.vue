<template>
  <v-dialog v-model="showModal">
    <slot></slot>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const { show } = defineProps([ 'show' ]);
const showModal = ref(show);
const emits = defineEmits([ 'toggleDialog' ]);

function toggleDialog() {
  return emits('toggleDialog', showModal.value);
}

watch(showModal, () => {
  toggleDialog();
})
</script>

<style scoped>

</style>
