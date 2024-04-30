<template>
	<main id="Home-page">
		<h1>Home</h1>
		<p>
			This is the home admin page</p>
	</main>
	<button @click="logOut">Log Out</button>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const user = JSON.parse(localStorage.getItem("users-info"))

if(!user) {
	router.push("/login")
}
else{
if(user.role == "menter"){
	router.push("/")
}
else{
	router.push("/admin")
}
}
const logOut = ()=>{
	localStorage.clear()
	router.push("/login")
}
</script>