import { Context } from 'react';

const localeKey = 'locale';
const defaultLocaleCode = 'zh-CN';

let localeContext: any;

function setLocale(lang: string, realReload = true) {
  const localeExp = new RegExp('^([a-z]{2})-?([A-Z]{2})?$');
  if (lang !== undefined && !localeExp.test(lang)) {
    // for reset when lang === undefined
    throw new Error('setLocale lang format error');
  }
  if (getLocale() !== lang) {
    window.localStorage.setItem(localeKey, lang || '');
    if (localeContext && !realReload) {
      localeContext.reloadAppLocale();
    }
    if (realReload) {
      window.location.reload();
    }
    if (window.dispatchEvent) {
      const event = new Event('languagechange');
      window.dispatchEvent(event);
    }
  }
}

// 优先级：路径参数 > localStorage > navigator > default
function getLocale() {
  const queryLang = new URL(window.location.href).searchParams.get(localeKey);
  const localLang =
    typeof localStorage !== 'undefined' ? window.localStorage.getItem(localeKey) : '';
  const isNavigatorLanguageValid =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  const browserLang = isNavigatorLanguageValid ? navigator.language : '';
  return queryLang || localLang || browserLang || defaultLocaleCode;
}

function setLocaleContext(context: Context<{ locale: string; reloadAppLocale: Function }>) {
  localeContext = context;
}

export { setLocale, getLocale, setLocaleContext, defaultLocaleCode };
