import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/index.vue';
import About from '@/pages/about.vue';
import Contact from '@/pages/contact.vue';
import Projects from '@/pages/projects/index.vue';
import ProjectDetails from '@/pages/projects/_id.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
