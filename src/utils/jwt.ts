import { LocalStorageConstant } from '@/constants/localStorage';

const JWT_TOKEN_REG = new RegExp('^([\\w-]+(\\.)){2}[\\w-]+$');

export class JwtUtil {
  static getJwtToken() {
    const token = localStorage.getItem(LocalStorageConstant.JWT_TOKEN_KEY);
    if (token && JWT_TOKEN_REG.test(token)) {
      return token;
    }
    return '';
  }

  static setJwtToken(token: string) {
    if (JWT_TOKEN_REG.test(token)) {
      localStorage.setItem(LocalStorageConstant.JWT_TOKEN_KEY, token);
    }
  }

  static clearJwtToken() {
    localStorage.removeItem(LocalStorageConstant.JWT_TOKEN_KEY);
  }
}
