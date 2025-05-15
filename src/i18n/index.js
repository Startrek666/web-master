import { createI18n } from "vue-i18n"
import zh from './langs/zh'
import en from './langs/en'

const messages = {
  zh,
  en
}
// const i18n = createI18n({
//   legacy: false,//处理报错
//   locale: 'en',//默认语言
//   messages
// })
// 从本地存储中获取用户选择的语言，如果没有则默认使用英文
const savedLocale = localStorage.getItem('locale') || 'en';
console.log('Loading locale from storage:', savedLocale); // 调试信息

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: savedLocale, // 默认语言
  fallbackLocale: 'en', // 回退语言
  silentTranslationWarn: false, // 显示翻译警告
  messages
});

export default i18n