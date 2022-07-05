import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import Toast from "primevue/toast";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component("Toast", Toast);
app.component("Menu", Menu);
app.component("Button", Button);
app.component("Menubar", Menubar);

app.mount("#app");
