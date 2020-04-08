import { LocalStorageConfig } from '@/config/localStorage';

const JWT_TOKEN_REG = new RegExp('^([\\w-]+(\\.)){2}[\\w-]+$');

export class JwtUtil {
  static getJwtToken() {
    const token = localStorage.getItem(LocalStorageConfig.JWT_TOKEN_KEY);
    if (token && JWT_TOKEN_REG.test(token)) {
      return token;
    }
    return '';
  }

  static setJwtToken(token: string) {
    if (JWT_TOKEN_REG.test(token)) {
      localStorage.setItem(LocalStorageConfig.JWT_TOKEN_KEY, token);
    }
  }

  static clearJwtToken() {
    localStorage.removeItem(LocalStorageConfig.JWT_TOKEN_KEY);
  }
}
