import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// !Bootstrap
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// !Vuex
import index from "./store/index";
import Vuex from "vuex";
// !Animation
import "animate.css";
// !Main Css
import './assets/main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowUp, faBars, faCartShopping, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPinterest, faSquareFacebook, faSquareInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass, faUser, faCartShopping, faTwitter, faPinterest, faSquareFacebook, faSquareInstagram, faBars, faXmark, faArrowUp);

const app = createApp(App)
/* add font awesome icon component */

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(index);
app.use(Vuex);
app.mount('#app')
