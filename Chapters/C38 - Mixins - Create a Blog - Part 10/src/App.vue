<template>
  <div class="container mt-3">
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  import showBlogs from "./components/showBlogs";
  import listBlogs from "./components/listBlogs";

  export default {
    components: {
      'show-blogs': showBlogs,
      'list-blogs': listBlogs
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
