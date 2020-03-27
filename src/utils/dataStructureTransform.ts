/**
 * @param array 子元素具有 id 属性的数组
 * @returns 以 id 作为 key 的对象
 */
export function translateArrayToByIdObject(
  array: Array<{
    id: string | number;
    [key: string]: any;
  }>,
) {
  const res: any = {};
  array.forEach(item => {
    res[item.id] = item;
  });
  return res;
}
