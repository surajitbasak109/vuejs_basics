<template>
  <div class="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" class="form-control" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id" exact>
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>

  import searchMixin from "../mixins/searchMixin";

  export default {
    data() {
      return {
        blogs: [],
        search: '',
      }
    },
    methods: {},
    created() {
      this.$http.get('https://vue-app-blog.firebaseio.com/posts.json')
        .then(data => data.json())
        .then(res => {
          let blogsArray = [];
          for (let key in res) {
            res[key].id = key;
            blogsArray.push(res[key]);
          }
          this.blogs = blogsArray;
        });
    },
    computed: {

    },
    filters:{
      toUppercase(value) {
        return value.toUpperCase();
      },
      snippet(value){
        return value.slice(0, 100) + '...';
      }
    },
    directives: {
      'theme': {
        bind: function (el, binding, vnode) {
          switch (binding.value) {
            case 'wide':
              el.style.maxWidth = '1200px';
              break;
            case 'narrow':
              el.style.maxWidth = '560px';
              break;
            default:
              el.style.maxWidth = '600px';
              break;
          }

          if (binding.arg === 'column') {
            el.style.background = '#ddd';
            el.style.padding = '20px';
          }
        }
      },
      'rainbow':{
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      }
    },
    mixins: [searchMixin]
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
