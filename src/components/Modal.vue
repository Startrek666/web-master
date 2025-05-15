<template>
  <div v-if="isVisible" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <slot></slot>
      <!-- <button @click="close">关闭</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const emit = defineEmits();



const isVisible = ref(false);


const open = () => {
  isVisible.value = true;
};


const close = () => {
  isVisible.value = false;
  emit('update:visible', false); 
};


defineExpose({
  open,
  close,
});
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

button {
  /* margin-top: 20px; */
  padding: 10px;
  background: #f44336;;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 两端对齐，按钮之间有空间 */
  align-items: center; /* 垂直居中对齐 */
  margin-top: 20px; /* 与表单内容的间距 */
}
</style>
