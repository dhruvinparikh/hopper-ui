import HireUs from './pages/hire-us';
import HowItWorks from './pages/how-it-works';
import SendReceive from './pages/send-receive';
import Home from './pages/home';
import FAQS from './pages/faqs';

export default [
  {
    name: 'home',
    path: '/newui',
    component: Home,
    isSecure: false
  },{
    name: 'hire-us',
    path: '/newui/hire-us',
    component: HireUs,
    isSecure: false,
  },{
    name: 'how-it-works',
    path: '/newui/how-it-works',
    component: HowItWorks,
    isSecure: false
  },{
    name: 'send-receive',
    path: '/newui/send-receive',
    component: SendReceive,
    isSecure: false
  },
  {
    name: 'faqs',
    ath: '/newui/faqs',
    component: FAQS,
    isSecure: false
  }
];