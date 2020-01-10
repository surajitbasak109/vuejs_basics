<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form One - Contact Us</h3>
      <p>Fill in this form to contact us</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Name" required>
      <label>Your message: </label>
      <textarea></textarea>
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Send</button>
    </div>
  </form-helper>
</template>

<script>
  import formHelper from './formHelper';

  export default {
    components: {
      'form-helper': formHelper
    },
    data() {
      return {

      }
    },
    methods: {
      handleSubmit(){}
    },
  }
</script>
