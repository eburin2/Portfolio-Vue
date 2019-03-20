
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Resume from './components/Resume.vue';
import Github from './components/Github.vue';


export const routes = [
  { path: '', component: Home },
  { path: '/contact', component: Contact},
  { path: '/github', component: Github},
  { path: '/resume', component: Resume},
  { path: '*', redirect: '/' }
];
