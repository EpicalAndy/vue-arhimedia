<template>
  <v-container fluid="">
    <v-row>

      <v-col cols="9">
        <slot name="left">
        </slot>
      </v-col>

      <v-col cols="3">
        <slot name="right">
        </slot>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
