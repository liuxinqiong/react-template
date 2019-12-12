import React, { createContext } from 'react';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { getLocale, setLocaleContext, defaultLocaleCode } from 'src/locales/locale';

const messageEn = require('src/locales/en-US').default;
const messageZh = require('src/locales/zh-CN').default;
const antdEn = require('antd/lib/locale-provider/en_US').default;
const antdZh = require('antd/lib/locale-provider/zh_CN').default;

const localeInfo: any = {
  'en-US': {
    locale: 'en-US',
    messages: messageEn,
    antd: antdEn,
  },
  'zh-CN': {
    locale: 'zh-CN',
    messages: messageZh,
    antd: antdZh,
  },
};

function getAppLocale() {
  return localeInfo[getLocale()] || localeInfo[defaultLocaleCode];
}

class LocaleWrapper extends React.Component {
  state = {
    locale: getLocale(),
  };

  reloadAppLocale = () => {
    const appLocale = getAppLocale();
    // didn't need it now?
    // moment.locale(appLocale.locale);
    this.setState({
      locale: appLocale.locale,
    });
  };

  render() {
    const { locale } = this.state;
    const appLocale = getAppLocale();
    const LangContext = createContext({});
    const langContextValue = {
      locale,
      reloadAppLocale: this.reloadAppLocale,
    };
    const reactIntl = (
      <IntlProvider locale={locale} messages={appLocale.messages}>
        <LangContext.Provider value={langContextValue}>
          <LangContext.Consumer>
            {(value: any) => {
              setLocaleContext(value);
              return this.props.children;
            }}
          </LangContext.Consumer>
        </LangContext.Provider>
      </IntlProvider>
    );
    return <ConfigProvider locale={appLocale.antd}>{reactIntl}</ConfigProvider>;
  }
}

export default LocaleWrapper;
