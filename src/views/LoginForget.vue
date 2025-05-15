<template>
<div class="forget-body">
    <div class="forget-loginform">
    <h2>密码重置</h2>
    <!-- <div class="register-name"><p>*昵称</p><input type="text" placeholder="请输入昵称" v-model="username"></div> -->
    <div class="forget-loginyx"><p>*邮箱：</p> <input type="text" placeholder="请输入邮箱地址" v-model="email"></div>
    <br><br>
    <div class="forget-loginyz"><p>*验证码：</p> <input type="text" placeholder="请输入验证号" v-model="num"></div>
    <br><br>
    <div class="forget-loginmm"><p>*新密码</p> <input type="password" placeholder="请输入密码" v-model="newpassword"></div>
    <br><br>
    <div class="forget-loginmm2"><p>*再次输入</p> <input type="password" placeholder="请再次输入密码" v-model="confirmnewpassword"></div>
    <br><br>
    <div class="forget-button">
    <span class="forget-dl"><router-link to="/login" active-class="active-link"><button @click="login">返回登录</button></router-link></span>
    <!-- <span class="login-zc"><button>注册</button></span> -->
    </div>
    
    </div>
    </div>
</template>


<script>
import {ref} from 'vue';
export default {
    setup(){
        const email =ref('');
        const num =ref('');
        const newpassword =ref('');
        const confirmnewpassword =ref('');

        const login=()=>{
            if(!/\S+@\S+\.\S+/.test(email.value)){
                alert('邮箱格式不正确！');
                return;
            }


            //验证码判断
            // if()


            if(!newpassword.value){
                 alert('密码设置不能为空');
                 return;
            }

            if(newpassword.value.length<6||newpassword.value.length>18){
                alert('密码必须大于六位或者小于18位');
                return;
            }
            if(newpassword.value!==confirmnewpassword.value){
                alert('两次输入密码不一致');
                return;
            }

            //验证逻辑通过后
            console.log('验证成功');

            email.value='';
            num.value='';
            newpassword.value='';
            confirmnewpassword.value='';
        };
        return{
            email,
            num,
            newpassword,
            confirmnewpassword,
            login
        };
    },
}
</script>

<style lang="scss" scoped>
    
*{
    margin: 0;
    padding: 0;
}
.forget-body{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(../img/2.png);
    background-size: cover;
     background-repeat:no-repeat;
}
.forget-loginform{
    position: relative;
    width: 360px;
    height: 460px;
    background-color: rgba(255,255, 255, 0.5);
    margin-top: 140px;
    margin-left: 600px;
    border-radius: 10px;
    
}
.forget-loginform input{
    width: 250px;
    height: 30px;
    margin-top: 6px;
    // padding-top: ;
}
h2{
    padding-left: 15px;
    padding-top: 10px;

}
.forget-button{
    padding-top: 50px;
}
.forget-loginyx{
    height: 20px;
    // background-color: red;
    padding-left: 49px;
    padding-top: 10px;

    // height: 40px;
}
.forget-loginyz{
    // background-color: red;
    height: 20px;
    padding-left: 49px;
    padding-top: 5px;

    // height: 40px;
}
.forget-loginmm{
    // background-color: red;
    height: 20px;
    padding-top: 5px;
    padding-left: 49px ;
    // height: 40px;
}
.forget-loginmm2{
    height: 20px;
    // background-color: red;
    padding-top: 5px;
    padding-left: 49px ;
    // height: 40px;
}
.forget-dl{
    padding-left: 88px;
}
.forget-dl button{
    // font-size: 20px;
    width: 180px;
    height: 35px;
    background-color: #409EFF;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 15px;
}
.forget-foot{
    padding-top: 50px;
    padding-left: 80px;
}
.forget-dl :hover{

background-color: #1e2b44;   
}

.forget-name{
    padding-left: 49px;
}
</style>