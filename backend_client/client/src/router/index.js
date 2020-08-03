import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Profil from '../components/Profil'
import Register from '../components/Register'
import Post from '../components/Post'
import AddPost from '../components/AddPost'
import DetailsPost from '../components/DetailsPost'

Vue.use(Router)

export default new Router({
    routes: [
        {
         path: '/',
         name: 'Home',
         component: Home 
        },
        {
            path: '/login',
            name: 'Login',
            component: Login 
        },
        {
            path: '/register',
            name: 'Register',
            component: Register 
           },
           {
            path: '/profil',
            name: 'Profil',
            component: Profil 
           },
           {
            path: '/post',
            name: 'Post',
            component: Post 
           },
           {
            path: '/post/add',
            name: 'AddPost',
            component: AddPost 
           },
           {
            path: '/post/detail/:slug',
            name: 'DetailsPost',
            component: DetailsPost
           }

    ]

}) 

