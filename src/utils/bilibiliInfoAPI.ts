// src/utils/api.ts
import axios from 'axios';
import { API_BASE_URL, API_ROUTES } from '@/config';

// 定义 LevelInfo 接口
interface LevelInfo {
  current_level: number;
  current_min: number;
  current_exp: number;
  next_exp: string;
}

// 定义 Official 接口
interface Official {
  role: number;
  title: string;
  desc: string;
  type: number;
}

// 定义 OfficialVerify 接口
interface OfficialVerify {
  type: number;
  desc: string;
}

// 定义 Pendant 接口
interface Pendant {
  pid: number;
  name: string;
  image: string;
  expire: number;
  image_enhance: string;
  image_enhance_frame: string;
}

// 定义 VipLabel 接口
interface VipLabel {
  path: string;
  text: string;
  label_theme: string;
  text_color: string;
  bg_style: number;
  bg_color: string;
  border_color: string;
  use_img_label: boolean;
  img_label_uri_hans: string;
  img_label_uri_hant: string;
  img_label_uri_hans_static: string;
  img_label_uri_hant_static: string;
}

// 定义 Vip 接口
interface Vip {
  type: number;
  status: number;
  due_date: number;
  vip_pay_type: number;
  theme_type: number;
  label: VipLabel;
  avatar_subscript: number;
  nickname_color: string;
  role: number;
  avatar_subscript_url: string;
  tv_vip_status: number;
  tv_vip_pay_type: number;
  tv_due_date: number;
}

// 定义 Wallet 接口
interface Wallet {
  mid: number;
  bcoin_balance: number;
  coupon_balance: number;
  coupon_due_time: number;
}

// 定义 WbiImg 接口
interface WbiImg {
  img_url: string;
  sub_url: string;
}

// 定义 API 返回的 DataDetails 接口
interface DataDetails {
  email_verified: number;
  face: string;
  face_nft: number;
  face_nft_type: number;
  level_info: LevelInfo;
  mid: number;
  mobile_verified: number;
  money: number;
  moral: number;
  official: Official;
  officialVerify: OfficialVerify;
  pendant: Pendant;
  scores: number;
  uname: string;
  vipDueDate: number;
  vipStatus: number;
  vipType: number;
  vip_pay_type: number;
  vip_theme_type: number;
  vip_label: VipLabel;
  wallet: Wallet;
  has_shop: boolean;
  shop_url: string;
  allowance_count: number;
  answer_status: number;
  is_senior_member: number;
  wbi_img: WbiImg;
  login: boolean;
  _jury: boolean;
}

// 定义 ApiResponse 接口
interface bilibiliUserInfoResponse {
  status: string;
  message: string;
  data: DataDetails;
}

// 新建一个函数来获取用户信息的数据
export const fetchUserInfo = async (): Promise<bilibiliUserInfoResponse> => {
  try {
    const response = await axios.get<bilibiliUserInfoResponse>(`${API_BASE_URL}${API_ROUTES.USER_INFO}`);
    return response.data;
  } catch (error) {
    console.error('获取用户信息失败:', error);
    throw error;
  }
};

// 其他 API 函数
// ...
