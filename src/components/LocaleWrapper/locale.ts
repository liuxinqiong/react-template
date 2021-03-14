import { createContext } from 'react';
import * as ReactIntl from 'react-intl';

interface LocaleContextValue {
  locale: string;
  reloadAppLocale: () => void;
}

const localeKey = 'locale';
const defaultLocaleCode = 'zh-CN';

let localeContext: LocaleContextValue;
/* eslint-disable import/no-mutable-exports */
let intl: ReactIntl.IntlShape;

/* eslint-disable no-underscore-dangle */
function _setIntlObject(theIntl: ReactIntl.IntlShape) {
  intl = theIntl;
}

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

/* eslint-disable no-underscore-dangle */
function _setLocaleContext(localeContextValue: LocaleContextValue) {
  localeContext = localeContextValue;
}

const LangContext = createContext({
  locale: getLocale(),
});

export {
  setLocale,
  getLocale,
  _setLocaleContext,
  _setIntlObject,
  defaultLocaleCode,
  intl,
  ReactIntl,
  LangContext,
};
