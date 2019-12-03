import Vue from 'vue'
import Router from 'vue-router'


import HomeDescription from '../components/content/home/HomeDescription.vue'
import Personnages from "../components/content/personnage/Personnages";
import Mondes from "../components/content/presentation/Mondes";
import Peuples from "../components/content/presentation/Peuples";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home-description',
            component: HomeDescription
        },
        {
            path: '/personnages',
            name: 'personnages',
            component: Personnages
        },
        {
            path: '/mondes',
            name: 'mondes',
            component: Mondes
        },
        {
            path: '/peuples',
            name: 'peuples',
            component: Peuples
        }
    ]
})