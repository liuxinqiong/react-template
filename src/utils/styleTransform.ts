/* eslint-disable no-useless-escape */
import { TypeUtil } from './type';

export class StyleTransform {
  static camelCaseToSnakeCase(s: string) {
    return s.replace(/([A-Z][a-z])/g, (m, p1) => `_${p1.toLowerCase()}`).replace(/^_/, '');
  }

  static snakeCaseToCamelCase(s: string) {
    return s.replace(/(\_\w)/g, (m) => m[1].toUpperCase());
  }

  static convertKeysToCamelCase(o: any) {
    if (TypeUtil.isArray(o)) {
      // 如果数组元素是简单类型的则默认不需要遍历
      if (o.length > 0 && !TypeUtil.isArray(o[0]) && !TypeUtil.isObject(o[0])) {
        return o;
      }
      return o.map((item: any) => StyleTransform.convertKeysToCamelCase(item));
    }
    if (TypeUtil.isObject(o)) {
      const result = {};
      Object.keys(o).forEach((key) => {
        result[StyleTransform.snakeCaseToCamelCase(key)] = StyleTransform.convertKeysToCamelCase(
          o[key],
        );
      });
      return result;
    }
    return o;
  }

  static convertKeysToSnakeCase(o: any) {
    if (TypeUtil.isArray(o)) {
      // 如果数组元素是简单类型的则默认不需要遍历
      if (o.length > 0 && !TypeUtil.isArray(o[0]) && !TypeUtil.isObject(o[0])) {
        return o;
      }
      return o.map((item: any) => StyleTransform.convertKeysToSnakeCase(item));
    }
    if (TypeUtil.isObject(o)) {
      const result = {};
      Object.keys(o).forEach((key) => {
        result[StyleTransform.camelCaseToSnakeCase(key)] = StyleTransform.convertKeysToSnakeCase(
          o[key],
        );
      });
      return result;
    }
    return o;
  }
}
