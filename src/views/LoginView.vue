<template>
    <div id="app">
      <login v-if="isLogin" @switchToRegister="switchToRegister"></login>
      <register v-if="!isLogin" @switchToLogin="switchToLogin"></register>
    </div>
  </template>
  
  <script>
  import Login from '../components/Login.vue';
  import Register from '../components/Register.vue';

  export default {
    name: 'App',
    components: {
      Login,
      Register
    },
    methods: {
      switchToRegister() {
        this.islogin = false;
      },
      switchToLogin() {
        this.isLogin = true;
      }

    },
    data() {
      return {
        isLogin: true 
      };
    },
    watch: {
      
      '$route.path'(newPath) {
        if (newPath === '/login') {
          this.isLogin = true; 
        } else if (newPath === '/register') {
          this.isLogin = false; 
        }
      }
    },
    created() {
      
      if (this.$route.path === '/login') {
        this.isLogin = true;
      } else if (this.$route.path === '/register') {
        this.isLogin = false;
      }
    },
    
  };
  
  // export default {
  //   name: 'App',
  //   components: {
  //     Login,
  //     Register
  //   },
  //   data() {
  //     return {
  //       isLogin: false  // 初始时显示登录组件
  //     };
  //   },
  //   methods: {
  //     switchToRegister() {
  //       this.isLogin = false;
  //     },
  //     switchToLogin() {
  //       this.isLogin = true;
  //     }
  //   }
  // };
  </script>
  
  <style>
  
  </style>