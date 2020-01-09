Vue.component("greeting", {
  template:
    "<p>Hey there, I am {{ name }}. <button v-on:click='changeName'>Change Name</button></p>",
  data: function() {
    return {
      name: "Avijit"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Surajit";
    }
  }
});

new Vue({
  el: "#app-one"
});

new Vue({
  el: "#app-two"
});
