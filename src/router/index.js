import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Account from "../views/AccountLogin.vue";
import Account2 from "../views/Account2.vue";
import WorkoutSessions from "../views/WorkoutSessions.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/account2",
        name: "Account2",
        component: Account2
    },
    {
        path: "/workoutsessions",
        name: "WorkoutSessions",
        component: WorkoutSessions
    },
    {
        path: "/about",
        name: "About",
        component: About
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    },

    {
        path: "/account",
        name: "Account",
        component: Account
    },
];

const router = new VueRouter({
    routes
});

export default router;