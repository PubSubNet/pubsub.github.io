import Vue from "vue";
import VueRouter from "vue-router";
import overview from "./parts/overview";
import prefs from "./parts/prefs";
import help from "./parts/help";

import "../style/main.scss";

Vue.use(VueRouter);


const routes = [
  { path: '/', component: overview },
  { path: '/overview', component: overview },
  { path: '/prefs', component: prefs },
  { path: '/help', component: help }
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
  // data: { name: "World" },
  components: {
    overview, prefs, help
  },
  router: router
});
