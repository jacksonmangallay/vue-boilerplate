import Vue from 'vue';
import VueRouter from 'vue-router';

import RouteMain from './routes/route.main';

Vue.use(VueRouter);

var AppRoutes = [];
AppRoutes = AppRoutes.concat(
    RouteMain
);

const routes = AppRoutes;

export default new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior: function () {
        return { x: 0, y: 0 };
    }
});