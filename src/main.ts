import Vue from "vue";
import App from "./App.vue";
import GmapVue from "gmap-vue";

Vue.use(GmapVue, {
  load: {
    key: "",
    // libraries: "places", // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
