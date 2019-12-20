export class TypeUtil {
  static isArray(a: any): boolean {
    return Array.isArray(a);
  }

  static isObject(o: any): boolean {
    return typeof o === 'object' && o !== null;
  }
}
