<template>
  <div>
    <h1>List of Ninjas</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
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

<style scoped>
h1 {
  color: green;
}
</style>
