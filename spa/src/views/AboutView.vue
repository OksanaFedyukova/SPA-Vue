<script setup>
import vTableData from '../components/v-table-data.vue'
</script>


<template>
  <div class="about">
    <vTableData/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
