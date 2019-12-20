/* eslint-disable no-useless-escape */
import { parse } from 'qs';

export class UrlUtil {
  static isUrl(path: string): boolean {
    const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
  }

  static isRelativeProtocolUrl(url: string) {
    const newUrl = `https:${url}`;
    return UrlUtil.isUrl(newUrl);
  }

  static getFullRequestUrl(url: string) {
    const { protocol, origin } = window.location;
    if (UrlUtil.isUrl(url)) {
      return url;
    }
    if (UrlUtil.isRelativeProtocolUrl(url)) {
      return protocol + url;
    }
    return origin + url;
  }

  static getPageQuery() {
    return parse(window.location.href.split('?')[1]);
  }
}
