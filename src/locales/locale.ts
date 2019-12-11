import { createContext } from "react";

let intl;
const LangContext = createContext({
  lang: getLocale()
});

function setLocale() {}

function getLocale() {}

function _setIntlObject(theIntl) {}

function _setLocaleContext(context) {}

export default {
  setLocale,
  getLocale,
  LangContext
};
