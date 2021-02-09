import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'

const AllVehicles = require('./assets/js/components/all-vehicles.vue');

const routes = [
    {
        name: 'all_vehicles',
        path: '/',
        component: AllVehicles
    },
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
