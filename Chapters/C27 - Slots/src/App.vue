<template>
  <div class="container py-3">
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information of the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required>
        <input type="password" placeholder="Password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from "./components/formHelper";
  export default {
    components: {
      'form-helper': formHelper
    },
    data() {
      return {
        title: "I am a dynamic slot title"
      };
    },
    methods: {
      handleSubmit(){
        alert("The form is going to be submitted");
      }
    }
  };
</script>

<style>
</style>
