import Vue from "vue";
import { locomotive } from "locomotive";

if (process.browser) {
  Vue.use({ locomotive });
}
