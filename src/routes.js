
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Resume from './components/Resume.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/contact', component: Contact},
  { path: '/resume', component: Resume},
  { path: '*', redirect: '/' }
];
