import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from '../views/Film.vue';
import HotFilm from '../views/film/HotFilm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/film',
    component: Film,
    children:[
      {
        path: 'f-hot',
        component: HotFilm,
      },
      {
        path: 'commingsoon',
        component: () => import('../views/film/Commingsoon.vue'),
        meta: {x: 0, y: 0}
      },
      {
        path: 'classic',
        component: () => import('../views/film/ClassicFilm.vue'),
      },
      {
        path: '',
        redirect: 'f-hot',
      },
    ],
  },
  {
    path: '/cinema',
    component: () => import('../views/Cinema.vue'),
  },
  {
    path: '/center',
    component: ()=>import('../views/Center.vue'),
  },
  {
    path: '/citylist',
    component: () => import('../views/CityList.vue'),
  },
  {
    path: '/search',
    component: () => import('../views/CityList.vue'),
  },
  {
    path: '/details/:id',
    component: () => import('../views/FilmDetail.vue')
  },
  {
    path: '/buyTicket/:id',
    component: () => import('../views/BuyTicket.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '*',
    redirect: '/film/f-hot',
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) =>{
    if(to.matched[0].path === '/buyTicket/:id' || to.path === '/center'){
        let token = localStorage.getItem('token');
        if(token === null || token === ""){
          router.replace({
            name:"login",
            query: {redirect: to.fullPath}
           });
          //  next("/login");
        }else{
          next();
        }
    }else{
      next();
    }
});

export default router;
