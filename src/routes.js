import Home from "./components/Home.vue"
import Activites from "./components/activites/Activites.vue"
import Events from "./components/events/Events.vue"

export const routes = [
    { path: '/', component: Home },
    { path: '/activites', component: Activites, },
    { path: '/events', component: Events, }
]