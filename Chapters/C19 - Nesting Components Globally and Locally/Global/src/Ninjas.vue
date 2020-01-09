<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "Ryu"]
    };
  }
};
</script>

<style>
</style>
