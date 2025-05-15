<template>
  <div class="form-overlay">
    <div class="form-content">
      <h2 class="form-title">留言板</h2>
      <!-- <div v-if="filteredWords.length" class="filter-warning">
        检测到敏感词并已过滤：{{ filteredWords.join(', ') }}
      </div> -->
      <form @submit.prevent="submitForm">
        <label for="content">留言内容:</label>
        <textarea
          id="content"
          v-model="content"
          required
          @input="checkSensitiveWords"
        ></textarea>
        <div class="form-buttons">
          <button type="submit">提交留言</button>
          <button type="button" @click="closeForm">关闭</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  nickname: String,
  email: String,
});

const sensitiveWords = ref([
  '暴力', '色情', '脏话', '诈骗',
  '毒品', '赌博', '反动', '垃圾'
]);

const content = ref('');
const filteredWords = ref([]);
const emit = defineEmits(['submit', 'close']);

// 实时检测（带防抖）
const checkSensitiveWords = () => {
  filteredWords.value = sensitiveWords.value.filter(word => {
    return new RegExp(word, 'gi').test(content.value);
  });
};

// 增强过滤方法（处理特殊字符）
const filterContent = (text) => {
  return sensitiveWords.value.reduce((acc, word) => {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return acc.replace(new RegExp(escapedWord, 'gi'), '*'.repeat(word.length));
  }, text);
};

const submitForm = () => {
  // 强制过滤内容
  const filteredContent = filterContent(content.value);

  // 自动更新文本框内容
  if (content.value !== filteredContent) {
    content.value = filteredContent;
    checkSensitiveWords();
  }

  // 提交过滤后的内容
  const message = {
    nickname: props.nickname,
    email: props.email,
    content: filteredContent,  // 确保提交的是过滤后内容
    timestamp: new Date(),
  };

  emit('submit', message);
  content.value = '';
  filteredWords.value = [];
};

const closeForm = () => {
  emit('close');
};

watch(content, (newVal) => {
  if (!newVal) filteredWords.value = [];
});
</script>


<style scoped>
.filter-warning {
  color: #ff4d4f;
  background-color: #fff2f0;
  border: 1px solid #ffccc7;
  padding: 8px 15px;
  border-radius: 4px;
  margin: 10px 0;
  font-size: 0.9em;
}
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保蒙层在最上层 */
}

.form-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 450px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(184, 134, 11, 0.3);
  position: relative;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

form {
  display: flex;
  flex-direction: column;
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #2C3E50;
  display: block;
  font-size: 16px;
}

input,
textarea {
  margin-bottom: 15px;
  padding: 12px;
  border: 1px solid rgba(184, 134, 11, 0.3);
  border-radius: 4px;
  font-size: 15px;
  width: 100%;
  transition: all 0.3s ease;
  background-color: #FAFAFA;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #B8860B;
  box-shadow: 0 0 0 2px rgba(184, 134, 11, 0.2);
  background-color: white;
}

textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.form-title {
  color: #2C3E50;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  position: relative;
  padding-bottom: 10px;
}

.form-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #B8860B, #DAA520, #B8860B);
  border-radius: 2px;
}

button {
  margin-top: 15px;
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

button[type="submit"] {
  background-color: #2C3E50;
  color: white;
  border: 2px solid #B8860B;
  margin-right: 10px;
}

button[type="button"] {
  background-color: white;
  color: #2C3E50;
  border: 2px solid #ccc;
}

button[type="submit"]:hover {
  background-color: #2C3E50;
  border-color: #DAA520;
  box-shadow: 0 4px 8px rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
}

button[type="button"]:hover {
  background-color: #f5f5f5;
  border-color: #B8860B;
  transform: translateY(-2px);
}
</style>