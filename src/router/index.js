import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from "../views/Registration"
import Forgot_Password from "../views/Forgot_Password"
import Contact_Us from "../views/Contact_Us"
import Links from "../views/Links/Links"
import MoveIn_MoveOut from "../views/Links/MoveIn_MoveOut"
import Temp_Labor_request from "../views/Links/Temp_Labor_request"
import Visitor_Information from "../views/Links/Visitor_Information"
import Unit_Sale_Request from "../views/Links/Unit_Sale_Request"
import Unit_Rent_Request from "../views/Links/Unit_Rent_Request"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: Registration
  },
  {
    path: '/forgot_password',
    name: '/forgot_password',
    component: Forgot_Password
  },
  {
    path: '/contact_us',
    name: '/contact_us',
    component: Contact_Us
  },
  {
    path: '/links',
    name: '/links',
    component: Links
  },
  {
    path: '/links/movein_moveout',
    name: '/links/movein_moveout',
    component: MoveIn_MoveOut
  },
  {
    path: '/links/templaborrequest',
    name: '/links/templaborrequest',
    component: Temp_Labor_request
  },
  {
    path: '/links/visitor_request',
    name: '/links/visitor_request',
    component: Visitor_Information
  },
  {
    path: '/links/unit_sale_request',
    name: '/links/unit_sale_request',
    component: Unit_Sale_Request
  },
  {
    path: '/links/unit_rent_request',
    name: '/links/unit_rent_request',
    component: Unit_Rent_Request
  },

];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
