<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Applications Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    
    <div v-for="(user, index) in users" :key="user.id+'_'+index">
      <p>{{ user.username }}  -  {{ user.email }}</p>
    </div>
</section>
</template>
<script>
  import axios from 'axios'
  export default {
    async asyncData ({ req }) {
      const baseURL = process.env.apiUrl      
      const { data } = await axios.get(baseURL + '/users')
      return {
        users: data
      }
    }
  }
</script>
<style scoped>
.title
{
  margin: 50px 0;
}
</style>