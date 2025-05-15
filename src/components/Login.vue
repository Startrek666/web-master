<template>
  <div class="login-container">
    <form action="" class="login-form">
      <h2>登录</h2>
      <div class="login-username">
        <label for="username">邮箱/手机号：</label><br>
        <input type="text" v-model="username" placeholder="请输入邮箱或手机号" />
      </div><br>


      <div class="login-password">
        <label for="password">密码：</label><br>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div><br><br><br><br><br><br>



      <div class="login-dl">
        <button @click="login">登录</button>
      </div><br><br><br>
      <p @click="$router.push('/register')">已有账号？去注册</p>
      <!-- <p @click="$emit('switchToRegister')">没有账号？去注册</p> -->
    </form>
  </div>
</template>
  
  <script>
  import {ref} from 'vue';
  export default{
    setup(){
        const username=ref('');
        const password = ref('');
        const login=()=>{   
            
            if(!password.value)
            {
                alert('账号密码不能为空');
                return;
            }
            if(password.value.length<6||password.value.length>18){
                alert('密码需要小于18位大于16位');
                return;
            }


            //后端验证，成功后
            console.log('登录成功');

            //清空信息
            username.value='';
            password.value='';

        };
        return{
            username,
            password,
            login,      
        };
      
    }
    
    
  }
  </script>
  
  <style scoped>
 
  *{
       font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        text-align: center;
       padding-top: 10px;
    }
    .login-container{
        position: absolute;
        width: 100%;
        height: 100vh;
        background-image: url(../img/2.png);
        background-size: cover;
         background-repeat:no-repeat;
    }
    .login-form {
        margin-top: 20vh;
        background-color: rgba(255,255, 255, 0.5);
        margin-left: auto;
        margin-right: auto;
        width: 350px;
        height: 450px;
    }
    input{
        height: 3.5vh;
        width: 300px;
        margin-top: 5px;
        margin-left: 15px;
       
    }
   label{
    margin-left: 15px;
    color: #000;
    
   }
   .login-username{
    margin-top: 35px;
   }
   .login-dl{
    padding-left: 80px;
    
   }
   p{
    text-align: center;
    color: #0f4479;
   }
   button{
       
        width: 180px;
        height: 35px;
        background-color: #409EFF;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-size: 15px;
       
   }
   .login-dl :hover{
    
    background-color: #1e2b44;   
    }
  </style>