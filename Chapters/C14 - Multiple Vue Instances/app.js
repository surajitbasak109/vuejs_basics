var one = new Vue({
  el: "#app-one",
  data: {
    title: "Vue App One"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello from app one :)";
    }
  }
});

var two = new Vue({
  el: "#app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed from app two";
    }
  },
  computed: {
    greet: function() {
      return "Yo dudes, this is app 2 speeaking to ya :)";
    }
  }
});

two.title = "App two title has been changed from outside.";
