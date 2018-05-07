import Vue from "vue";
import hello_part from "./parts/hello";

let v = new Vue({
  el: "#psn-top",
  template: `
  <div>
    Name: <input v-model="name" type="text">
    <hello_part :name="name" :initialEnthusiasm="5" />
  </div>
  `,
  data: { name: "World" },
  components: {
    hello_part
  }
});
