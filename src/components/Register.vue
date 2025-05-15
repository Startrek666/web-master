<template>
    <div class="register-container">
        <form action="" class="register-form">
            <h2>注册</h2>
            <div class="register-email">
                <label for="registeremail">邮箱/手机号：</label><br>
                <input type="text" v-model="registeremail" placeholder="请输入用户名" autocomplete="new-email" />
            </div><br>


            <div class="register-yznum">
                <label for="registeryznum">验证号码：</label><br>
                <input type="number" v-model="registeryznum" placeholder="请输入验证码" />
            </div><br>


            <div class="register-password">
                <label for="register-password">密码：</label><br>
                <input type="password" v-model="registerpassword" placeholder="请输入密码" autocomplete="new-password" />
            </div><br>



            <div class="register-confirmpassword">
                <label for="register-confirmpassword">再次输入：</label><br>
                <input type="password" v-model="confirmpassword" placeholder="请再次输入密码"
                    autocomplete="new-confirmpassword" />
            </div><br><br>


            <div class="register-zc">
                <button @click="register">注册</button>
            </div>


            <p @click="$router.push('/login')">已有账号？去登录</p>

            <!-- <p @click="$emit('switchToLogin')">已有账号？去登录</p> -->
        </form>
    </div>
</template>
  
  <script>
  import {ref} from 'vue';
    export default{
        setup(){
            const registeremail =ref('');
            const registerpassword = ref('');
            const confirmpassword=ref('');
           // const registeryznum = ref('');

            const register =()=>{
                if(!registeremail.value){
                    alert('用户姓名不能为空！')
                    return;
                }
                if(!registerpassword.value){
                    alert('密码设置不能为空！');
                    return;
                }
                if(registerpassword.value.length<6||password.value.length>18){
                    alert('密码只能是6-18位');
                    return;
                }
                    if(registerpassword.value!==confirmpassword.value){
                    alert('两次输入密码不一致！');
                    return;
                }
                
                
                if(!/\S+@\S+\.\S+/.test(registeremail.value)){
                    alert('邮箱格式不正确！');
                    return;
                }

                //验证通过后执行注册逻辑
                //...
                console.log('注册成功！');

                registeremail.value='';
                registerpassword.value='';
                confirmpassword.value='';
                register.value='';
            };
            return{
                registeremail,
                registerpassword,
                confirmpassword,
                register
            };
        },
    };
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
    .register-container{
        position: absolute;
        width: 100%;
        height: 100vh;
        background-image: url(../img/2.png);
        background-size: cover;
         background-repeat:no-repeat;
    }
    .register-form {
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
   .register-email{
    margin-top: 10px;
   }
   .register-zc{
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
   .register-zc :hover{
    
    background-color: #1e2b44;   
    }

  </style>