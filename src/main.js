import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(
    createAuth0({
        domain:  import.meta.env.VITE_DOMAIN,
        clientId: import.meta.env.VITE_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_AUDIENCE
        }
    })
);
app.mount("#app");
