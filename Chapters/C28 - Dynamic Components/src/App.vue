<template>
  <div class="container py-3">
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>

  import formOne from './components/formOne';
  import formTwo from './components/formTwo';

  export default {
    components: {
      'form-one': formOne,
      'form-two': formTwo
    },
    data() {
      return {
        component: "form-two"
      }
    },
    methods: {
      handleSubmit() {
        alert("The form is going to be submitted");
      }
    }
  };
</script>

<style>
</style>
