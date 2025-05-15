<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">姓名：</label>
      <input v-model="name" id="name" type="text" required />
    </div>

    <div class="form-group">
      <label for="email">邮箱：</label>
      <input v-model="email" id="email" type="email" required />
    </div>

    <div class="form-group">
      <label for="content">内容：</label>
      <textarea v-model="content" id="content" required></textarea>
    </div>

    <div class="submit-btn">
      <button type="submit">提交留言</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';


const emit = defineEmits();


const name = ref('');
const email = ref('');
const content = ref('');

// 提交表单
const submitForm = () => {
  const formData = {
    name: name.value,
    email: email.value,
    content: content.value,
  };

  if (formData.name && formData.email && formData.content) {
    // 触发 submit 事件，将数据传递给父组件
    emit('submit', formData);
  }

  // 清空表单
  name.value = '';
  email.value = '';
  content.value = '';
};
</script>


<style scoped>
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
}

label {
  margin-right: 10px; 
  white-space: nowrap; 
}

input, textarea {
  flex: 1; 
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
}
.submit-btn {
  display: flex;
  justify-content: center; 
}
button {
  padding: 10px;
  margin-top: 15px; 
  background: #5cb85c;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
}

button:hover {
  background: #4cae4c;
}
</style>
