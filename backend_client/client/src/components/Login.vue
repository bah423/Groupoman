<template>
    <div>
        <form v-on:submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Valider</button>
          </form>
    </div>
</template>
<script>
import axios from 'axios'
import router from '../router' 
import EventBus from './EventBus' 
export default { data() {
     return { 
         email:'',
          password: ''
           }
     },
    methods: { 
        login() { 
            axios.post('http://localhost:3000/users/login',{ email: this.email, password: this.password })
            .then(res => { 
                sessionStorage.setItem('usertoken', res.data.token) 
                sessionStorage.setItem('user_id', res.data.id) 
                console.log(res)
                 this.email='' 
                 this.password='' 
                 router.push({name: 'Home'}) })
                 .catch(err => { console.log(err) }) 
                 this.emitMethod() }, 
                 emitMethod() { EventBus.$emit('logged-in','loggedin') 
                 }
      }
    }
</script>

