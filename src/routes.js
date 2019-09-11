import Home from "./components/Home.vue"
import Activites from "./components/activites/Activites.vue"
import Events from "./components/events/Events.vue"
import Login from "./components/user/Login.vue"
import Signup from "./components/user/Signup.vue"
export const routes = [
    { path: '/', component: Home },
    { path: '/activites', component: Activites, },
    { path: '/events', component: Events, },
    { path: '/login', component: Login, },
    { path: '/signup', component: Signup, }
]