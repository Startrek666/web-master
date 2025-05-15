import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../views/OverView.vue'
import HomeView from '../views/HomeView.vue'
import EducationTrainingView from '../views/EducationTrainingView.vue'
import VideoConferencingView from '../views/VideoConferencingView.vue'
import CourseResourcesView from '../views/CourseResourcesView.vue'
import ContestProgrammingView from '../views/ContestProgrammingView.vue'
import TeamTaskView from '../views/TeamTaskView.vue'
import LargeModelView from '../views/LargeModelView.vue'
import { switchLanguageBasedOnIP } from '../service/languageService'
import i18n from '../i18n'
import MessageBoardView from '../views/MessageBoardView.vue'
import LoginView from '@/views/LoginView.vue'
import LoginForget from '@/views/LoginForget.vue'
import ContactView from '@/views/ContactView.vue'
const routes = [
  {
    path: '/courseresources',
    name: 'courseresources',
    component: CourseResourcesView,
  },
  {
    path:'/loginforget',
    name:'loginforget',
    component:LoginForget
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component:LoginView,
  // },
  {
    path: '/login',
    component: LoginView, // 使用 App.vue 作为父组件
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    component: LoginView, // 使用 App.vue 作为父组件
    meta: { requiresAuth: false }
  },
  {
    path: '/', // 默认路由
    // redirect: '/login' // 默认跳转到登录页面
  },

  {

    path: '/',
    redirect: '/home',
    component: OverView,
    children: [
      {
        path: 'home',
        name: '首页',
        component: HomeView,
      },
      {
        path: 'educationtraining',
        name: '教育培训平台',
        component: EducationTrainingView,
      },
      {
        path: 'videoconferencing',
        name: '视频会议平台',
        component: VideoConferencingView,
      },
      {
        path: 'contestprogramming',
        name: '竞赛与编程平台',
        component: ContestProgrammingView,
      },
      {
        path: 'teamtask',
        name: '协同办公平台',
        component: TeamTaskView,
      },
      {
        path: 'largemodel',
        name: '大模型支持',
        component: LargeModelView,
      },
      {
        path: 'messageboard',
        name: '留言板',
        component: MessageBoardView,
      },
      {
        path:'contact',
        name:'联系我们',
        component:ContactView,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 从本地存储中获取语言设置
  const savedLocale = localStorage.getItem('locale');

  if (savedLocale) {
    // 如果有保存的语言设置，直接使用
    i18n.global.locale.value = savedLocale;
    console.log('Router guard: using saved locale', savedLocale);
    next();
  } else {
    // 如果没有保存的语言设置，尝试根据IP切换语言
    switchLanguageBasedOnIP().then(() => {
      console.log('Router guard: switched language based on IP');
      next();
    }).catch(() => {
      console.log('Router guard: failed to switch language based on IP');
      next(); // 如果获取IP地址失败，也继续路由跳转
    });
  }
});

export default router;