<template>
  <div id="app" class="container mt-3">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Your first Vue file, Woooo!"
    };
  },
  methods: {
    greeting() {
      return "heeeey cowboy!";
    }
  }
};
</script>

<style>
</style>
