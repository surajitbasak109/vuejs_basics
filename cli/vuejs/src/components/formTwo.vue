<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form Two - Log In</h3>
      <p>Enter details to log-in</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Login</button>
    </div>
  </form-helper>
</template>

<script>
  import formHelper from './formHelper';

  export default {
    components: {
      'form-helper': formHelper
    },
    data(){
      return {}
    },
    methods:{
      handleSubmit(){}
    }
  }
</script>
