<template>
  <div class="container mt-3">
    <add-blog></add-blog>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  export default {
    components: {
      'add-blog': addBlog
    },
    data() {
      return {}
    },
    methods: {}
  };
</script>

<style>
  body {
    margin: 0;
  }
</style>
