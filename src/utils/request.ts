import { notification } from 'antd';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import environment, { isLocalEnvironment } from '@/environments';
import { AppConstant } from '@/constants/app.constant';
import { JwtUtil } from '@/utils/jwtUtil';
import { UrlUtil } from '@/utils/urlUtil';
import { StyleTransform } from '@/utils/styleTransform';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  413: '请求发送的资源大小超过服务器限制',
  422: '当创建一个对象时，发生一个验证错误。',
  429: '操作过于频繁，请稍后再试',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const axiosInstance = axios.create({
  baseURL: environment.apiUrl,
  withCredentials: true,
});

/* eslint-disable no-param-reassign */
function addRequestHeaderToken(config: AxiosRequestConfig) {
  const fullUrl = new URL(UrlUtil.getFullRequestUrl(config.url || ''));
  // 避免 token 给第三方
  const isSameOrigin = isLocalEnvironment ? true : fullUrl.origin === window.location.origin;
  // jwt token
  const token = JwtUtil.getJwtToken();
  if (token && isSameOrigin) {
    config.headers = {
      [AppConstant.JWT_HEADER_NAME]: `Bearer ${token}`,
    };
  }
}

axiosInstance.interceptors.request.use(config => {
  addRequestHeaderToken(config);
  config.params = StyleTransform.convertKeysToSnakeCase(config.params);
  if (!(config.data instanceof FormData)) {
    config.data = StyleTransform.convertKeysToSnakeCase(config.data);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => StyleTransform.convertKeysToCamelCase(response.data),
  error => {
    const { response, data } = error;
    if (response && response.status) {
      // 如果后台有传回 message，则优先使用
      const errorText = data.message || codeMessage[response.status] || response.statusText;
      notification.error({
        key: AppConstant.REQUEST_ERROR_NOTIFICATION_KEY,
        message: '请求错误',
        description: errorText,
      });
      // 未登录（401）且不在登录页，则跳转登录页
    }
    return Promise.reject(error);
  },
);