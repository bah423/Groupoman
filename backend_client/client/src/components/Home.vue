<template>
<!-- afficher tous les post depuis la bases  -->
<div>
<ul>
<li v-for="post in posts" :key="post.id">
label : {{post.label}}
description : {{post.description}}

</li>
</ul>
</div>
</template>


<script>
import axios from "axios"

export default {
    
    name : "Home",

data()  {
    return {
        posts:[]
    }

},
    mounted(){

        this.getAllPost();
    },



    methods: {

        getAllPost(){
    
        axios.get("http://localhost:3000/posts/list").then(res => { 
            console.log(res)

            this.posts= res.data;
        }).catch(err => {
            console.log(err)
        })
         
     }

        }
        
    }
    

</script>

<style lang="stylus" scoped>

</style>