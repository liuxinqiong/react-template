import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';

import { ConfigProvider } from 'antd';

import {
  getLocale,
  _setLocaleContext,
  defaultLocaleCode,
  _setIntlObject,
  LangContext,
} from './locale';

const antdEn = require('antd/es/locale-provider/en_US').default;
const antdZh = require('antd/es/locale-provider/zh_CN').default;

const messageEn = require('@/locales/en-US').default;
const messageZh = require('@/locales/zh-CN').default;

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

const InjectedWrapper = (props: any) => {
  const intl = useIntl();
  _setIntlObject(intl);
  return props.children;
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
    const langContextValue = {
      locale,
      reloadAppLocale: this.reloadAppLocale,
    };
    const reactIntl = (
      <IntlProvider locale={locale} messages={appLocale.messages}>
        <InjectedWrapper>
          <LangContext.Provider value={langContextValue}>
            <LangContext.Consumer>
              {(value: any) => {
                _setLocaleContext(value);
                return this.props.children;
              }}
            </LangContext.Consumer>
          </LangContext.Provider>
        </InjectedWrapper>
      </IntlProvider>
    );
    return <ConfigProvider locale={appLocale.antd}>{reactIntl}</ConfigProvider>;
  }
}

export default LocaleWrapper;
