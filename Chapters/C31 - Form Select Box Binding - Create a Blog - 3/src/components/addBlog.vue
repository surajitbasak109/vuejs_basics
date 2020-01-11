<template>
  <div class="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog Title: </label>
      <input type="text" v-model.lazy="blog.title" required/>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div class="checkboxes d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <label>Ninjas</label>
          <input type="checkbox" value="Ninjas" v-model="blog.categories">
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <label>Wizards</label>
          <input type="checkbox" value="Wizards" v-model="blog.categories">
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <label>Mario</label>
          <input type="checkbox" value="Mario" v-model="blog.categories">
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <label>Cheese</label>
          <input type="checkbox" value="Cheese" v-model="blog.categories">
        </div>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
    </form>
    <div class="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul class="list-group">
        <li class="list-group-item" v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
      <p>Blog Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        blog: {
          title: "",
          content: "",
          author: "",
          categories: []
        },
        authors: [
          "The Net Ninja",
          "The Angular Avenger",
          "The Vue Vindicator"
        ]
      }
    },
    methods: {}
  };
</script>

<style>
  .add-blog * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .add-blog {
    margin: 20px auto;
    max-width: 500px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }

  .preview {
    padding: 10px 20px;
    border: 1px dotted #cccccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }

  .checkboxes label {
    font-weight: bold;
  }

  .checkboxes input[type="checkbox"] {
    width: 24px;
    height: 24px;
    margin: 20px 0 10px 10px;
  }
</style>
