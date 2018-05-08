import Vue from "vue";
import VueRouter from "vue-router";

import "../style/main.scss";

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/', component: Foo },
  { path: '/overview', component: Foo },
  { path: '/prefs', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
let v = new Vue({
  el: "#psn-top",
  data: { name: "World" },
  components: {

  },
  router: router
});
