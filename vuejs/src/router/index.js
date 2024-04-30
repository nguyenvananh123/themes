import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import home from "../admin/home.vue"
import login from "../auth/login.vue"
import sign from "../auth/singUp.vue"


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
			
		},
		{
			path: '/admin',
			component: home,
			
		}

		,
		{
			path: '/login',
			component: login,
			
		}

		,
		{
			path: '/sign',
			component: sign,
			
		}
	
	],
})

export default router