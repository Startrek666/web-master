import i18n from '../i18n';

export async function switchLanguageBasedOnIP() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    const country = data.country;

    let locale = 'en';
    if (country === 'CN') {
      locale = 'zh';
    }

    // 设置语言
    i18n.global.locale.value = locale;

    // 保存到本地存储
    localStorage.setItem('locale', locale);
    console.log('Language set based on IP:', locale);

    return locale;
  } catch (error) {
    console.error('Error fetching IP data:', error);
    // 默认使用中文
    const defaultLocale = 'zh';
    i18n.global.locale.value = defaultLocale;
    localStorage.setItem('locale', defaultLocale);
    return defaultLocale;
  }
}