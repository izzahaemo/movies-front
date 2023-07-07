import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

// import "bootstrap/dist/css/bootstrap.css";
// import "./assets/mazzer/css/main/app.css";
// import "./assets/mazzer/css/main/app-dark.css";
// import "./assets/mazzer/css/shared/iconly.css";
// import "./assets/mazzer/js/bootstrap.js";
// import "./assets/mazzer/js/app.js";
// import "./assets/mazzer/extensions/apexcharts/apexcharts.min.js";
// import "./assets/mazzer/js/pages/dashboard.js";

import "./sass/app.sass";
import "./assets/adminlte/plugins/fontawesome-free/css/all.min.css";
import "./assets/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "./assets/adminlte/dist/css/adminlte.min.css";
// import "./assets/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import "./axios";
// import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

// import "bootstrap/dist/js/bootstrap.js";
import "./assets/adminlte/plugins/jquery/jquery.min.js";
import "./assets/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "./assets/adminlte/dist/js/adminlte.min.js";
import "./assets/adminlte/dist/js/demo.js";
