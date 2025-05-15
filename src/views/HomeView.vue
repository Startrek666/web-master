<template>
<!--  <button @click="showForm = true" class="message-btn">留言板</button>-->

<!--    &lt;!&ndash; 留言板弹窗 &ndash;&gt;-->
<!--  <MessageBoard-->
<!--   v-if="showForm"-->
<!--    :nickname="userInfo.nickname"-->
<!--    :email="userInfo.email"-->
<!--    @submit="handleSubmit"-->
<!--    @close="showForm = false"-->
<!--  />-->
  <div class="home">
    <!-- <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.description') }}</p>

    <p>{{ $t('home.paragraph.part1') }}</p>
    <p>{{ $t('home.paragraph.part2') }}</p>
    <p>{{ $t('home.paragraph.part3') }}</p> -->


    <div class="home-container">
      <div class="left-sidebar">
        <div class="custom-carousel">
          <el-carousel :interval="4000" height="300px" arrow="always" :autoplay="true" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
              <div class="carousel-item">
                <img :src="item.image" :alt="'Carousel image ' + (index + 1)">
                <div class="carousel-caption">
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="messages-container">

          <div v-for="(message, index) in messages" :key="index" class="message-card">
            <p class="message-nickname">{{ message.nickname }}</p>
            <p class="message-email">{{ message.email }}</p>
            <p class="message-content">{{ message.content }}</p>
            <p class="message-time">{{ formatTime(message.timestamp) }}</p>
          </div>
        </div>
      </div>
      <div class="right-sidebar">
        <ul>
          <li class="list">
            <span>1</span>
            <a href="#">通知1</a>
          </li>
          <li class="list">
            <span>1</span>
            <a href="#">通知1</a>
          </li>
          <li class="list">
            <span>1</span>
            <a href="#">通知1</a>
          </li>
          <li class="list">
            <span>1</span>
            <a href="#">通知1</a>
          </li>
          <li class="list">
            <span>1</span>
            <a href="#">通知1</a>
          </li>
        </ul>
      </div>
    </div>


    <!-- <div class="floating-window">
      <div class="floating-window-header">
        <strong>留言板</strong>
      </div>
      <div class="floating-window-body">
        <p>点击下方按钮进入留言板</p>
      </div>
      <div class="floating-window-footer">
        <button><router-link to="/messageboard">进入</router-link></button>
      </div>
    </div> -->
    <!-- <div class="contact">
      <router-link to="/contact" active-class="active-link">联系我们</router-link>
    </div> -->

</div>

</template>

<script>
// 导入图片
import photo1 from '@/img/2.png';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import MessageBoard from '../components/MessageBoard.vue';

export default {
  name: 'HomeView',
  components: {
    MessageBoard,
  },
  data() {
    return {
      // 轮播图数据
      carouselItems: [
        {
          id: 1,
          desc: "轮播图内容1",
          image: photo1,
        },
        {
          id: 2,
          desc: "轮播图内容2",
          image: photo1,
        },
        {
          id: 3,
          desc: "轮播图内容3",
          image: photo1,
        },
        {
          id: 4,
          desc: "轮播图内容4",
          image: photo1,
        },
        {
          id: 5,
          desc: "轮播图内容5",
          image: photo1,
        },
        {
          id: 6,
          desc: "轮播图内容6",
          image: photo1,
        },
      ],
      // 用户信息
      userInfo: {},
      showForm: false, // 控制表单显示
      messages: [], // 存储留言
    };
  },
  methods: {
    // 获取用户信息
    async fetchUserInfo() {
      try {
        const response = await axios.get('/api/user'); // 替换为你的后端接口
        this.userInfo = response.data; // 假设返回的数据包含 nickname 和 email
      } catch (error) {
        console.error('获取用户信息失败:', error);
      }
    },
    // 提交留言
    handleSubmit(message) {
      message.timestamp = new Date(); // 添加当前时间
      this.messages.push(message); // 添加新留言
      this.showForm = false; // 关闭表单
    },
    // 格式化时间函数
    formatTime(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    this.fetchUserInfo(); // 组件挂载时获取用户信息
  },
};
</script>

<style>
/* 新的轮播图样式 */
.custom-carousel {
  width: 100%;
  margin-bottom: 20px;
}

.custom-carousel .el-carousel {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-carousel .el-carousel__item {
  overflow: hidden;
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.carousel-item:hover img {
  transform: scale(1.05);
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  text-align: center;
}

a{
  text-decoration-line: none;
 }

.home{

  /* background-color: rebeccapurple; */
  /* height: 500px; */
  width: 100%;

}

.home .home-container{
  display: flex;
  gap: 15px;

}
.left-sidebar{
  flex: 7;
  /* background-color: #2980b9; */
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}



/* Element Plus样式覆盖 */
:deep(.el-carousel__container) {
  height: 100%;
}

:deep(.el-carousel__indicators) {
  bottom: 20px;
}

:deep(.el-carousel__indicator--horizontal .el-carousel__button) {
  width: 30px;
  height: 3px;
  border-radius: 1px;
  background-color: rgba(184, 134, 11, 0.7);
}

:deep(.el-carousel__arrow) {
  background-color: rgba(184, 134, 11, 0.7);
  border: none;
  width: 36px;
  height: 36px;
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(184, 134, 11, 0.9);
}


.message-btn{
  position: fixed;
  top: 120px;
  right: 30px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #2C3E50;
  border: 2px solid #B8860B;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  z-index: 999; /* 确保按钮始终可见 */
}

.message-btn:hover {
  background: #2C3E50;
  border-color: #DAA520;
  box-shadow: 0 6px 12px rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
  color: #DAA520;
}


.message-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.messages-container {
max-height: 150px;
overflow-y: auto;
border: 1px solid rgba(184, 134, 11, 0.3);
border-radius: 4px;
padding: 15px;
background-color: #FFFFFF;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
margin-top: 20px;
}

.message-card {
  margin-bottom: 15px;
  background-color: #FAFAFA;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border-left: 3px solid #B8860B;
  transition: all 0.2s ease;
}

.message-card:hover {
  transform: translateX(2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-left-color: #DAA520;
}

.message-nickname {
  font-weight: bold;
  margin-bottom: 5px;
}

.message-email {
  color: #666;
  margin-bottom: 10px;
}

.message-content {
  color: #333;
}
.message-time {
  color: #999;
  font-size: 12px;
  text-align: right;
}

.messages-container::-webkit-scrollbar{
  width: 8px;
}
.messages-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* 滚动条轨道背景 */
  border-radius: 4px;
}
.messages-container::-webkit-scrollbar-thumb {
  background: #888; /* 滚动条滑块颜色 */
  border-radius: 4px;
}
.messages-container::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滚动条滑块悬停颜色 */
}

.right-sidebar{
  flex: 3;
}
.right-sidebar ul{
  display: flex;
  flex-direction:column;
  margin: 0;
  /* border: 1px solid #121212; */

}
.right-sidebar .list{
  height: 60px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction:column;
  gap: 5px;
  border: 1px solid rgba(184, 134, 11, 0.3);
  transition: all 0.3s ease;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  padding: 10px;
}

.right-sidebar .list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: #B8860B;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.right-sidebar .list:hover{
  background-color: #FAFAFA;
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: rgba(184, 134, 11, 0.5);
}

.right-sidebar .list:hover::before {
  opacity: 1;
  background-color: #DAA520;
}
.right-sidebar .list a{
  color: #333333;
  font-weight: 500;
  transition: all 0.3s ease;
}

.right-sidebar .list:hover a {
  color: #8B4513;
}
.floating-window {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  border: 1px solid #ddd;
  /* display: flex;
  flex-direction: column; */
  background-color: #ffffff;
  border-radius: 8px; /* 圆角边框 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}


.floating-window-header {
  padding: 10px;
  background-color: #121212;
  color: white;
  font-size: 20px;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}


.floating-window-body {
  padding: 20px;
  color: #333;
  flex-grow: 1;
}


.floating-window-footer {
  padding: 10px;
  background-color: #ecf0f1;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
}


.floating-window-footer button {
  background: linear-gradient(135deg, #3498db, #2980b9);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}


.floating-window-footer button:hover {
  background: linear-gradient(135deg, #2980b9, #3498db); /* 悬停时的渐变色 */
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.floating-window-footer button a {
  text-decoration-line: none;
  color: white;
}

.contact a {
  text-decoration-line: none;
  color: black;
}
.contact a:hover{
  color: red;
}
</style>