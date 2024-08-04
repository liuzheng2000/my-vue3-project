// src/utils/api.ts
import axios from 'axios';
import { API_BASE_URL, API_ROUTES } from '@/config';

// 定义一个接口来描述返回的数据结构
interface QRCodeResponse {
  qrCodeBase64: string;
  data: string;
}

// 定义一个函数来获取二维码的 base64 数据
export const fetchQRCode = async (): Promise<QRCodeResponse> => {
    try {
      const response = await axios.get<QRCodeResponse>(`${API_BASE_URL}${API_ROUTES.GENERATE_QR_CODE}`);
      return response.data;
    } catch (error) {
      console.error('获取二维码失败:', error);
      throw error;
    }
  };


// 定义  ApiResponse 接口
  interface DLQrXxResponse {
    code: number;
    message: string;
    ttl: number;
    data: number;
  }




// 新建一个函数来获取 generate-DlXX 的数据
export const fetchGenerateDlXX = async (): Promise<DLQrXxResponse> => {
  try {
    const response = await axios.get<DLQrXxResponse>(`${API_BASE_URL}${API_ROUTES.GENERATE_DLXX}`);
    return response.data;
  } catch (error) {
    console.error('获取 generate-DlXX 数据失败:', error);
    throw error;
  }
};

