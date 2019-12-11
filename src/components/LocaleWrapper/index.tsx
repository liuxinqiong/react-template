import React, { createContext } from 'react'
import { IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'
import { getLocale, setLocaleContext } from 'src/locales/locale'

const localeInfo: any = {
  'en-US': {
    locale: 'en-US',
    messages: require('src/locales/en-US').default,
    antd: require('antd/lib/locale-provider/en_US').default
  },
  'zh-CN': {
    locale: 'zh-CN',
    messages: require('src/locales/zh-CN').default,
    antd: require('antd/lib/locale-provider/zh_CN').default
  }
}

class LocaleWrapper extends React.Component {
  state = {
    locale: getLocale()
  }

  getAppLocale() {
    return localeInfo[getLocale()]
  }

  reloadAppLocale = () => {
    const appLocale = this.getAppLocale()
    // didn't need it now?
    // moment.locale(appLocale.locale);
    this.setState({
      locale: appLocale.locale
    })
  }

  render() {
    const appLocale = this.getAppLocale()
    // react-intl must use `-` separator
    const reactIntlLocale = appLocale.locale
    const LangContext = createContext({})
    const langContextValue = {
      locale: reactIntlLocale,
      reloadAppLocale: this.reloadAppLocale
    }
    const reactIntl = (
      <IntlProvider locale={reactIntlLocale} messages={appLocale.messages}>
        <LangContext.Provider value={langContextValue}>
          <LangContext.Consumer>
            {(value: any) => {
              setLocaleContext(value)
              return this.props.children
            }}
          </LangContext.Consumer>
        </LangContext.Provider>
      </IntlProvider>
    )
    return <ConfigProvider locale={appLocale.antd}>{reactIntl}</ConfigProvider>
  }
}

export default LocaleWrapper
