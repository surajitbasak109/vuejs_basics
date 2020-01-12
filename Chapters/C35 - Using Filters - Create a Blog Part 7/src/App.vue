<template>
  <div class="container mt-3">
    <show-blogs></show-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  import showBlogs from "./components/showBlogs";

  export default {
    components: {
      'show-blogs': showBlogs
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
