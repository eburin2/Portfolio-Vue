import Work from './components/Work.vue';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/work', component: Work},
  { path: '/contact', component: Contact},
  { path: '*', redirect: '/' }
];
