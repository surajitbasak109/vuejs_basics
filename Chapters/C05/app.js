new Vue({
  el: "#app",
  data: {
    name: "Surajit",
    job: "Ninja",
    website: "https://surajitbasak109.github.com",
    siteTag: '<a href="https://surajitbasak109.github.com">Surajit Basak</a>'
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
