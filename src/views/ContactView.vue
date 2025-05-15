<template>
<div class="contact-body">
    <h1>CONTACT US</h1>
    
    <div class="contact-contain-left">
        
        <form @submit.prevent="handleSubmit">
        
        <div class="contact-name">
            <div class="name-firstname">
                <label for="firstname">First Name:</label><br>
                <input v-model="form.firstname" type="text" id="firstname" required />
            </div>
            <div class="name-lastname">
                <label for="lastname">Last Name:</label><br>
                <input v-model="form.lastname" type="text" id="lastname" required />
            </div>
        </div>
        

        <div class="contact-companyemail">
          <label for="email">Company Email:</label><br>
          <input v-model="form.email" type="email" id="email" required />
        </div>
        
        <div class="contact-companyname">
          <label for="companyname">Company Name:</label><br>
          <input v-model="form.companyname" type="text" id="companyname" required />
        </div>
        
        <div class="contact-message">
          <label for="message">Message:</label><br>
          <textarea v-model="form.message" id="message" required></textarea>
        </div>
        
        <div class="contact-button">
            <button type="submit">Submit</button>
        </div>
        
      </form>

      <div class="response-message">
        <p>{{ responseMessage }}</p>
      </div>
    </div>

    <div class="contact-contain-right">
        <p>DFSC Center is committed to protecting and respecting your privacy,
     and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. 
     From time to time, we would like to contact you about our products and services,
      as well as other content that may be of interest to you. If you consent to us contacting you for this purpose,
       please tick below to say how you would like us to contact you:</p>

       <input type="checkbox" id="checkbox1" v-model="checkbox1">
       <p> agree to receive other communications from DFSC Center.
        In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.</p>

        <input type="checkbox" id="checkbox2" v-model="checkbox2">
        <p>I agree to allow DFSC Center to store and process my personal data.
            You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
    </div>
</div>

</template>


<script>

// import {ref} from 'vue';
// export default {
//     setup() {
//         const checkbox1=ref(false);
//         const checkbox2=ref(false);
//         const validataform=()=>{
//             if(checkbox1.value&&checkbox2.value){
//                 console.log('提交成功')
//             }
//             else{
//                 alert('请确保两个都勾选上')
//                 // console.log('提交失败')
//             }
//         };
//         return{
//             checkbox1,
//             checkbox2,
//             validataform,
//         }
//     },
// }
// console.log(validataform)

import { reactive, ref } from 'vue';

export default {
  setup() {
    // 表单数据
    const form = reactive({
      firstname: '',
      lastname: '',
      email: '',
      companyname: '',
      message: ''
    });

    
    const checkbox1 = ref(false);
    const checkbox2 = ref(false);


    const responseMessage = ref('');

    
    const handleSubmit = async () => {
      
      if (!checkbox1.value || !checkbox2.value) {
        alert('请确保两个都勾选上');
        return;
      }

      const data = {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        companyname: form.companyname,
        message: form.message
      };

      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        responseMessage.value = result.message;

        
        form.firstname = '';
        form.lastname = '';
        form.email = '';
        form.companyname = '';
        form.message = '';
        checkbox1.value = false;
        checkbox2.value = false;
      } catch (error) {
        console.error('Error:', error);
        responseMessage.value = '邮件发送失败，请稍后再试。';
      }
    };

    return {
      form,
      checkbox1,
      checkbox2,
      responseMessage,
      handleSubmit
    };
  }
};

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1{
    text-align: center;
}
.contact-companyemail input{
    width: 600px;
    height: 25px;
}
.contact-companyname input{
    width: 600px;
    height: 25px;
}
.contact-body{
    /* position:relative; */
    /* background-color: #F7F9F5; */
}
.contact-contain-left{
    /* margin-top: 10px;
    float: left; */
    /* position: absolute; */
    width: 65%;
    height: 600px;
    float: left;
    /* background-color: blue; */
    
}
.contact-contain-right{
   
    /* margin-left: 700px;
    padding-top:100px ;
    margin-top: 10px; */
    /* position: absolute; */
    /* position: relative; */
    float: left;
    right: 10px;
    width: 35%;
    height: 600px;
    /* background-color: aqua; */
    

}
.contact-name{
    /* position: relative; */
    width: 100%;
}
.name-firstname{
    /* position: absolute; */
    float: left;
    /* margin-top: 12px; */
}
.name-firstname input{
    height: 25px;
}
.name-lastname input{
    height: 25px;
}
.name-lastname {
    /* position: absolute; */
    margin-left: 400px;
    /* margin-top: 12px; */
    /* float: left; */
}  
.contact-companyemail{
margin-top: 15px;
}
.contact-companyname{
    margin-top: 15px;
}
.contact-message{
    margin-top: 15px;
}
input{
    background-color: #F7F7F7;
}

textarea{
    margin-top: 5px;
    /* width: 600px; */
    /* height:400px; */
    width: 600px;
    height: 45px;
    resize: none;
    background-color: #F7F7F7;
}
.contact-button{
    margin-top: 30px;
    margin-left: 250px;
}
button{
    width: 100px;
    height: 30px;
}
</style>