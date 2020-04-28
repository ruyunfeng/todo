import Vue from 'vue';
import App from './app.vue';

import './assets/less/global.less';
// import './index.html';
// import './css/index.less';
// import './style.css';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    render:(h) => h(App)
}).$mount(root)
console.log("hollo world!");