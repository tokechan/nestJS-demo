import axios from 'axios';

// OpenAPIの設定
const BASE_PATH = 'http://localhost:3000';

// Axiosインスタンスを作成
const axiosInstance = axios.create({
  baseURL: BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

// レスポンスインターセプタを追加（必要に応じて）
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

// APIベースURLを設定する関数
export const setBaseURL = (url: string) => {
  axiosInstance.defaults.baseURL = url;
};

export default {
  BASE_PATH,
  axios: axiosInstance,
}; 