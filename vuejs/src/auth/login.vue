<template>
    <h3>login</h3>
        <div class="m-2">
            <input type="text" placeholder="Users Name" v-model="nameLogin" class="form-control">
        </div>
        <div class="m-2">
            <input type="password" placeholder="Users Password" v-model="passwordLogin" class="form-control">
        </div>
        <button @click="submit()" class="btn btn-primary">submit</button>
        <router-link to="/sign">Sign Up</router-link>
</template>
<script setup>
import { ref  } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()
const api = "http://localhost:3000/users"
const nameLogin = ref()
const passwordLogin = ref()

const submit = async()=>{
    const res = await axios.get(`${api}?name=${nameLogin.value}&password=${passwordLogin.value}`)
    if(res.status == 200 && res.data.length > 0){
        localStorage.setItem("users-info" ,JSON.stringify(res.data))
        router.push("/")
    }
    else{
        alert("Sai Thong Tin MK ")
    }

}

</script>