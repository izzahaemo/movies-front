import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            input: [
                "./sass/app.sass",
                "./assets/adminlte/plugins/fontawesome-free/css/all.min.css",
                "./assets/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
                "./assets/adminlte/dist/css/adminlte.min.css",
                "./assets/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
                "./assets/adminlte/plugins/jquery/jquery.min.js",
                "./assets/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js",
                "./assets/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
                "./assets/adminlte/dist/js/adminlte.min.js",
                "./assets/adminlte/dist/js/demo.js",
            ],
        }),
    ],
    server: {
        port: 3000,
    },
});
