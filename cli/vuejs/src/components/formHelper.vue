<template>
  <div>
    <h1>Please fill out our form...</h1>
    <form>
      <div class="form-header">
        <slot name="form-header"></slot>
      </div>
      <div class="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div class="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div class="useful-links">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    components: {},
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>

<style>
  form {
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
  }
  .useful-links ul {
    padding: 0;
  }
  .useful-links li {
    display: inline-block;
    margin-left: 10px;
  }
  form > div {
    padding: 20px;
    background: #eee;
    margin: 20px 0;
  }
  .form-header {
    background: #dddddd;
    border: 1px solid #bbb;
  }
</style>
