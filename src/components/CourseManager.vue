<template>
  <div class="dashboard">
    <!-- 左侧发布表单 -->
    <div class="publish-section">
      <h2>课程详情</h2>
      <form @submit.prevent="submitForm" class="publish-form">
        <div class="form-group">
          <label for="title">课程名称:</label>
          <input type="text" id="title" v-model="title" required class="form-input" />
        </div>

        <div class="form-group">
          <label for="description">课程描述:</label>
          <textarea id="description" v-model="description" required class="form-textarea"></textarea>
        </div>

        <div class="form-group">
          <label for="videoFile">上传课程：</label>
          <input
            type="file"
            id="videoFile"
            accept="video/*"
            @change="handleFileChange"
            required
            class="form-file"
          />
        </div>

        <button type="submit" class="submit-button">发布</button>
      </form>
    </div>

    <!-- 右侧课程列表 -->
    <div class="course-list-section">
      <h2>Published Videos</h2>
      <ul class="course-list">
        <li v-for="(video, index) in videos" :key="index" class="course-item">
          <div class="course-content">
            <h3 class="course-title">{{ video.title }}</h3>
            <p class="course-description">{{ video.description }}</p>
            <video controls :src="video.videoUrl" class="course-video"></video>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 视频数据
const videos = ref([]);

// 表单数据
const title = ref('');
const description = ref('');
const videoFile = ref(null);

// 处理文件选择
const handleFileChange = (event) => {
  videoFile.value = event.target.files[0]; // 获取选中的文件
};

// 提交表单
const submitForm = () => {
  if (!videoFile.value) {
    alert('Please select a video file.');
    return;
  }

  // 生成视频的本地 URL
  const videoUrl = URL.createObjectURL(videoFile.value);

  // 添加新视频到列表
  const newVideo = {
    title: title.value,
    description: description.value,
    videoUrl: videoUrl,
  };
  videos.value.push(newVideo);

  // 清空表单
  title.value = '';
  description.value = '';
  videoFile.value = null;
};
</script>

<style scoped>

.dashboard {
  display: flex;
  
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
}

/* 左侧发布表单 */
.publish-section {
  
  flex: 1;
 
  min-width: 964px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.5), #2575fc);
  color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.publish-section h2 {
  
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

.publish-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
}

.form-input,
.form-textarea,
.form-file {
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background-color 0.3s;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-input:focus,
.form-textarea:focus,
.form-file:focus {
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  background-color: #ff6b6b;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s
}

.submit-button:hover {
  background-color:#ff4757;
}

/* 右侧课程列表 */
.course-list-section {
  flex: 2;
  padding: 30px;
  background-color: white;
  overflow-y: auto;
}

.course-list-section h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.course-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.course-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.course-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.course-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.course-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.course-description {
  font-size: 14px;
  color: #666;
}

.course-video {
  width: 100%;
  border-radius: 8px;
}
</style>