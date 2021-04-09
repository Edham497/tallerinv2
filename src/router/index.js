import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Registrar from "../views/Registro.vue";
import Partidos from "../views/Partidos.vue";
import Candidatos from "../views/Candidatos.vue";
import Partido from "../views/Partido.vue";
// import RegistroPartido from '../views/CrearPartido.vue'
// import RegistroCandidato from '../views/CrearCandidato.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Client/Home.vue"),
  },
  {
    path: "/votar",
    name: 'Votar',
    component: ()=> import("@/views/Client/votar.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/candidatos",
    name: "Candidatos",
    component: Candidatos,
  },
  {
    path: "/partidos",
    name: "Partidos",
    component: Partidos,
  },
  {
    path: "/partido/:id",
    name: "Partido",
    component: Partido,
  },
  {
    path: "/admin/partidos",
    component: () => import("@/views/admin/partidos.vue"),
  },
  {
    path: "/admin/registrar",
    component: Registrar,
    children: [
      {
        path: "",
        redirect: "/admin/registrar/partido",
      },
      {
        path: "/admin/registrar/partido",
        component: () => import("@/views/registro/Partido.vue"),
      },
      {
        path: "/admin/registrar/candidato",
        component: () => import("@/views/registro/Candidato.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: About,
    children: [
      {
        path: "",
        redirect: "/auth/login",
      },
      {
        path: "login",
        component: () => import("@/views/auth/LogIn.vue"),
      },
      {
        path: "registro",
        component: () => import("@/views/auth/SignIn.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* eslint-disable */
router.beforeEach((to, from, next) => {
  const requireAuth = !["/auth", "/auth/registro", "/auth/login"].includes(
    to.path
  );
  console.log('path', to.path)

  const isPublicPath = ["/", "/partidos", "/candidatos"].includes(to.path);

  const logged = JSON.parse(localStorage.getItem("$usr"));

  // console.log(logged);
  // console.log(requireAuth);

  if (isPublicPath) {
    next();
    return;
  }

  if (requireAuth && !logged) {
    next("/auth");
  } else {
    if (logged && !requireAuth) {
      next("/home");
    } else next();
  }
});

export default router;
