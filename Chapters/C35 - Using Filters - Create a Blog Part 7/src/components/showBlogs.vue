<template>
  <div v-theme:column="'wide'" class="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogs: []
      }
    },
    methods: {},
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          this.blogs = data.body.slice(0, 10);
        });
    }
  };
</script>

<style>
  .show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #eeeeee;
  }
</style>
