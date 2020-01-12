<template>
  <nav class="topnav">
    <ul>
      <li>
        <router-link to="/" exact>Blog</router-link>
      </li>
      <li>
        <router-link to="/add" exact>Add a New Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped>
  .topnav {
    background: #444444;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .topnav ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  .topnav ul li {
    display: inline-block;
    margin: 0 10px;
  }
  .topnav ul li a {
    color: #ffffff;
    text-decoration: none;
    padding: 6px 8px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .topnav ul li a.router-link-active {
    background: #eeeeee;
    color: #444444;
  }
</style>
