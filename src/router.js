import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProjectLockedin from './views/ProjectLockedin.vue'

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
    }

  ]
})
