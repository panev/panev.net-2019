import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProjectLockedin from './views/ProjectLockedin.vue'
import ProjectTicketmaster from './views/ProjectTicketmaster.vue'
import ProjectSunflow from './views/ProjectSunflow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project-lockedinlive',
      name: 'lockedin',
      component: ProjectLockedin
    },
    {
      path: '/project-ticketmaster', 
      name: 'ticketmaster',
      component: ProjectTicketmaster
    },
    {
      path: '/project-sunflow', 
      name: 'sunflow',
      component: ProjectSunflow
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
