<template>
    <h3>Sign UP</h3>
    <div class="m-2">
        <input type="text" placeholder="Users Name" v-model="name" class="form-control">
    </div>
    <div class="m-2">
        <input type="password" placeholder="Users Password" v-model="password" class="form-control">
    </div>
    <button @click="submit()" class="btn btn-primary">submit</button>
    <router-link to="/login">Login</router-link>
</template>

<script setup>
import { ref  } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()
const api = "http://localhost:3000/users"
const name = ref()
const password = ref()

const submit = async()=>{

    const newUsers = {
        name:name.value,
        password:password.value,
        role:"menter"
    }

    const res = await axios.get(`${api}?name=${name.value}&password=${password.value}`)
    if(res.status == 200 && res.data.length > 0){
        alert("Tai Khoan Da Co Nguoi Dang ky")
        
    }
    else{
        const users = await axios.post(api , newUsers)
        if(users.status == 201){
            localStorage.setItem("users-info" ,JSON.stringify(users.data))
            router.push('/')
        }
    }
}

</script>