<template>
  <div class="messageboard">
    <div class="messageboard-header">
        <strong>留言列表</strong>
    </div>
    <div class="messageboard-content">
        <ul>
            <li v-for="(message, index) in messages" :key="index">
                <div class="message-card">
                    <div class="message-header">
                        <span>{{ message.name }}</span> 
                        ({{ message.email }})
                    </div>
                    <div class="message-content">
                        {{ message.content }}
                    </div>
                </div>
            </li>
        </ul>
    </div>

    
    <div class="messageboard-footer">
      <button @click="openFormModal">添加留言</button>
    </div>

   
    <Modal ref="modal" @update:visible="handleModalVisibility">
      <MessageForm @submit="handleSubmit" />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from "../components/Modal.vue";
import MessageForm from "../components/MessageForm.vue";


const modal = ref(null);


const messages = ref([
  { name: '张三', email: 'zhangsan@example.com', content: '这是一个示例留言' },
  { name: '李四', email: 'lisi@example.com', content: '这是李四的留言' },
  { name: '王五', email: 'wangwu@example.com', content: '王五也留下了留言' },
  { name: '赵六', email: 'zhaoliu@example.com', content: '赵六的留言内容' },
  { name: '钱七', email: 'qianqi@example.com', content: '钱七的留言很有意思' }
]);


const openFormModal = () => {
  modal.value.open();
};


const handleSubmit = (formData) => {
  if (formData.name && formData.email && formData.content) {
    
    messages.value.push(formData);
  }
  

  modal.value.close();
};



</script>


<style>
.messageboard {
    width: 80%;
    /* height: 700px; */
    margin: 0 auto;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
}
.messageboard-header {
    background-color: #121212;
    color: white;
    font-size: 29px;
    text-align: center;
    border-radius: 5px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #121212;
}

 .messageboard-content li{
    list-style: none;
 }
.message-card {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
  margin-right: 40px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.message-header {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.message-content {
  font-size: 16px;
  color: #666;
}
.messageboard-footer {
    display: flex;
    justify-content: center;
}
.messageboard-footer button {
    background: linear-gradient(135deg, #3498db, #2980b9); 
    border: none;
    border-radius: 5px; 
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}
.messageboard-footer button:hover {
    background: linear-gradient(135deg, #2980b9, #3498db); /* 悬停时的渐变色 */
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}
</style>