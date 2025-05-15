<template>
  <div class="overview">

    <div class="overview-head">

      <div class="logo-section">
            <div class="logo">
              <img src="../img/lemon.png" alt="">
            </div>

        </div>

      <ul class="nav-section">
        <li><router-link to="/home" active-class="active-link" class="nav-link">{{ $t('nav.home') }}</router-link></li>
        <!-- <li><router-link to="/educationtraining" active-class="active-link">{{ $t('nav.edutraing') }}</router-link></li> -->
        <li class="dropdown">
          <router-link to="/educationtraining" active-class="active-link" class="nav-link">
            {{ $t('nav.edutraing') }}
          </router-link>

        </li>

        <li><router-link to="/videoconferencing" active-class="active-link" class="nav-link">{{ $t('nav.video') }}</router-link></li>
        <li><router-link to="/contestprogramming" active-class="active-link" class="nav-link">{{ $t('nav.contest') }}</router-link></li>
        <li><router-link to="/teamtask" active-class="active-link" class="nav-link">{{ $t('nav.teamtask') }}</router-link></li>
        <li><router-link to="/largemodel" active-class="active-link" class="nav-link">{{ $t('nav.model') }}</router-link></li>
        <li><a href="https://main.lemomate.com/shop" target="_blank" class="nav-link">{{ $t('nav.shop') }}</a></li>

      </ul>

      <div class="btn-section">
        <div class="btn">
          <span class="lang" @click="switchLanguage">{{ $t('nav.language') }}</span>
<!--          <router-link to="/login" active-class="active-link" class="nav-link">{{ $t('nav.login') }}</router-link>-->
<!--          <span>|</span>-->
<!--          <router-link to="/register" active-class="active-link" class="nav-link">{{ $t('nav.register') }}</router-link>-->
        </div>
      </div>
    </div>

    <div class="overview-img"></div>

    <div class="overview-body">
      <router-view />
    </div>
    <div class="overview-footer">
<!--      <div class="contact">-->
<!--        <router-link to="/contact" active-class="active-link">{{ $t('nav.contact') }}</router-link>-->
<!--      </div>-->
      <div class="copyright"><span>邮箱：ruizhian@hotmail.com</span></div>
    </div>
  </div>
</template>

<script name="OverView" setup>
import { useI18n } from 'vue-i18n';


const { locale, t } = useI18n();

const switchLanguage = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh';
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale); // 保存到本地存储
  console.log('Language switched to:', newLocale); // 调试信息
};


</script>

<style scoped>
/* 全局样式 */

.nav-link{
  /* width: 200px; */
  /* height: 60px; */
  /* display: block; */
  color: #fff;
  text-decoration-line: none;
  /* position: relative; */
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.overview {
  display: flex;
  flex-direction: column;
  min-height: 100vh
}



.overview-head {
  justify-content: space-between;
  width: 100%;
  /* height: 60px; */
  /* 垂直方向上居中 */
  align-items: center;
  background-color: #2C3E50;
  color: #ffffff;
  display: flex;
  /* margin: 0 2rem; */
  /* max-width: 1440px; */
  /* overflow: hidden; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid #B8860B;
}
.overview-head li {
  text-align: center;
  line-height: 60px;
  color: #fff;
  /* height: 60px;  */
}
.overview-head .logo-section{
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: #2C3E50;
  gap: 12rem;
  position: relative;
}

.overview-head .logo-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #B8860B, transparent);
}

.overview-head .logo {
  width: 60px;
  height: 60px;
  margin: 0 3rem;
}
.overview-head .logo img{
  width: 100%;
  height: 100%;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

}
.overview-head .nav-section{
  display: flex;
  flex: 1;
  justify-content: center;
  gap:2rem;
  /* position: relative; */
  /* height: 60px; */
}
.overview-head .btn-section{
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  /* width: 100px; */
}
.overview-head .btn{
  display: flex;
  width: 200px;
  margin: 0 3rem;
  height: 60px;
  /* background-color: #3B82F6; */
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 1rem;
}
.overview-head .btn-section .nav-link:hover{
  color:  #DAA520;
}

/* 扩大点击范围 */
.overview-head .nav-link{
  display: block;
  /* padding: 10px 0; */
}
.overview-head li .nav-link:hover,
.overview-head li a:hover {
  color: #DAA520;
  text-decoration-line: none;
}
.overview-head li ul {
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  background-color: #2C3E50;
  z-index: 1;
  border-bottom: 2px solid #B8860B;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.overview-head .nav-section .dropdown{
  position: relative;
}

.overview-head .dropdown:hover .dropdown-content{
  display: block;
}

li{
  list-style: none;
}



a.link{
  color: #fff;
}
/* .overview-head li a:link{
  text-decoration: none;
  color: red;
} */
.active-link {
  color: #fff;
  /* font-weight: bold; */
  text-decoration-line: none;
  /* border-bottom: 2px solid #fff; */
  display: block;
  /* padding: 104px 39px; */
}

.overview-head ul li a.active-link {
  /* text-decoration-line: none; */
  border-bottom: 2px solid #B8860B;
  /* padding: 104px 39px; */
  font-weight: bold;
  color: #DAA520;
  position: relative;
}

.overview-head ul li a.active-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #B8860B;
  box-shadow: 0 0 8px #DAA520;
}

#overview-dl {
  width: 100px;
  height: 30px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  right: 23px;
  top: 16px;
  cursor: pointer;
}
.lang {
  cursor: pointer;
  /* right: 155px; */
  /* top: 20px; */
  /* position: absolute; */
  /* border-radius: 10px; */
}

.lang:hover{
  color: #ed6737;
}

.overview-img {
  height: 300px;
  background: url(../img/bg.png) no-repeat center center;
  background-size: cover;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.overview-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #B8860B, transparent);
  z-index: 1;
}

.overview-img::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #B8860B, transparent);
  z-index: 1;
}

.overview-body {
  /* padding: 10px 120px; */
  background-color: #F5F5F5;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
  position: relative;
}

.overview-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(184, 134, 11, 0.3), transparent);
}

.overview-footer {
  color: white;
  border-top: 2px solid #B8860B;
  background-color: #2C3E50;
  height: 100px;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
}

.copyright {
  margin-top: 19px;
}

.contact {
  margin-top: 10px;
}

.contact a {
  text-decoration-line: none;
  color: white;
}

.contact a:hover {
  color: #DAA520;
}
</style>