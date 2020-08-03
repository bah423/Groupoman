<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Groupomania</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

           <li v-if="auth ==''">
               <router-link class="nav-link" to="/register">Inscription</router-link>
           </li>
            <li v-if="auth ==''">
               <router-link class="nav-link" to="/login">Login</router-link>
           </li>
                       <li v-if="auth =='loggedin'">
               <router-link class="nav-link" to="/home">Mon Mur</router-link>
           </li>
            <li v-if="auth =='loggedin'">
               <router-link class="nav-link" to="/posts">Publication</router-link>
           </li>
            <li v-if="auth =='loggedin'">
               <router-link class="nav-link" to="/post/add">Ajouter une publication</router-link>
           </li>
            <li  v-if="auth =='loggedin'">
               <router-link class="nav-link" to="/profil">Mon profil</router-link>
           </li>

          </ul>
        </div>
      </nav> 
    </div>
</template>

<script>
import EventBus from './EventBus'
EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data(){
    return {
      auth: '',
      token: sessionStorage.usertoken,
    }
  },
  methods: {
    mounted() {
    EventBus.$on('logged-in', status => {
    this.auth = status
})  
    },
  },
}
</script>