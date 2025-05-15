<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// 初始化语言设置
const { locale } = useI18n();
const route = useRoute();

// 从本地存储中获取语言设置
onMounted(() => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    locale.value = savedLocale;
  }
});

// 监听路由变化，确保语言设置保持一致
watch(
  () => route.path,
  () => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && locale.value !== savedLocale) {
      locale.value = savedLocale;
    }
  }
);
</script>

<template>


  <RouterView />
</template>

<style scoped>

</style>
