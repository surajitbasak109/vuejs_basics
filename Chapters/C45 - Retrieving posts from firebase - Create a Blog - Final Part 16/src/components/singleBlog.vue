<template>
  <div class="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>
      {{ blog.content }}
    </article>
    <hr>
    <p>Author: {{ blog.author }}</p>
    <div class="category-container">
      <h5>Category:</h5>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get("https://vue-app-blog.firebaseio.com/posts/" + this.id + ".json")
        .then(data => data.json())
        .then(data => {
          this.blog = data;
        })
        .catch(err => console.log(err));
    }
  }
</script>
<style scoped>
  .single-blog {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
