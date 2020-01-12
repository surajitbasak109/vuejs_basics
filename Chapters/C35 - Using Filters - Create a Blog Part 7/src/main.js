import Vue from "vue";
import App from "./App.vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

//custom directives

Vue.directive('theme', {
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
});

//filters
Vue.filter('to-uppercase', value => value.toUpperCase());
Vue.filter('snippet', value => value.slice(0, 100) + '...');

new Vue({
  el: "#app",
  render: h => h(App)
});
