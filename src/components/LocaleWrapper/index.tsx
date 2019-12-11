import React from "react";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";

const localeInfo: any = {
  "en-US": {
    locale: "en-US",
    messages: require("src/locales/en-US").default,
    antd: require("antd/lib/locale-provider/en_US").default
  },
  "zh-CN": {
    locale: "zh-CN",
    messages: require("src/locales/zh-CN").default,
    antd: require("antd/lib/locale-provider/zh_CN").default
  }
};

const defaultLocaleCode = "en-US";
const localLocaleKey = "locale";

class LocaleWrapper extends React.Component {
  state = {
    locale: defaultLocaleCode
  };

  getAppLocale() {
    let appLocale = localeInfo[defaultLocaleCode];
    const url = new URL(window.location.href);
    if (url.searchParams.get(localLocaleKey)) {
      const locale = url.searchParams.get(localLocaleKey) || defaultLocaleCode;
      appLocale = appLocale[locale] || appLocale;
    } else if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem(localLocaleKey)
    ) {
      const locale = localStorage.getItem(localLocaleKey) || defaultLocaleCode;
      appLocale = localeInfo[locale] || appLocale;
    } else if (
      typeof navigator !== "undefined" &&
      localeInfo[navigator.language]
    ) {
      appLocale = localeInfo[navigator.language] || appLocale;
    } else {
      appLocale = localeInfo[defaultLocaleCode] || appLocale;
    }
    return appLocale;
  }

  reloadAppLocale = () => {
    const appLocale = this.getAppLocale();
    // didn't need it now?
    // moment.locale(appLocale.locale);
    this.setState({
      locale: appLocale.locale
    });
  };

  render() {
    const appLocale = this.getAppLocale();
    // react-intl must use `-` separator
    const reactIntlLocale = appLocale.locale;
    // const LangContextValue = {
    //   locale: reactIntlLocale,
    //   reloadAppLocale: this.reloadAppLocale,
    // };
    const reactIntl = (
      <IntlProvider locale={reactIntlLocale} messages={appLocale.messages}>
        {this.props.children}
      </IntlProvider>
    );
    return <ConfigProvider locale={appLocale.antd}>{reactIntl}</ConfigProvider>;
  }
}

export default LocaleWrapper;
