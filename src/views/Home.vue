<template>
  <div class="login-container">
    <h1>登录页面</h1>
    <div class="qr-code-container">
      <img :src="qrCodeSrc" alt="二维码" v-if="qrCodeSrc" />
      <p v-else>点击按钮获取二维码</p>
    </div>
    <button @click="handleFetchQRCode" :disabled="loading">
      {{ loading ? '加载中...' : '获取二维码' }}
    </button>
    <div v-if="statusMessage" class="status-message">{{ statusMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue';
import { fetchQRCode, fetchGenerateDlXX } from '@/utils/api';
import { useRouter } from 'vue-router';
import '../css/Home.css';

export default defineComponent({
  name: 'Home',
  setup() {
    const qrCodeSrc = ref<string | null>(null);
    const loading = ref<boolean>(false);
    const statusMessage = ref<number | null>(null);
    const router = useRouter(); // 获取路由实例
    let intervalId: ReturnType<typeof setInterval> | null = null; // 定义轮询的 interval ID

    const handleFetchQRCode = async () => {
      loading.value = true;
      statusMessage.value = null; // 重置状态消息
      try {
        const data = await fetchQRCode();

        // 检查Base64数据是否包含前缀
        if (data && data.data) { // 确保 data 和 data.data 存在
          qrCodeSrc.value = data.data.startsWith('data:image/png;base64,') ? data.data : `data:image/png;base64,${data.data}`;
        } else {
          throw new Error('二维码数据无效');
        }

        // 开始轮询获取状态
        startPolling();
      } catch (error) {
        console.error('获取二维码失败:', error);
        alert('获取二维码失败，请重试。');
      } finally {
        loading.value = false;
      }
    };

    const startPolling = () => {
      // 如果已经有一个轮询在运行，先清除它
      if (intervalId) {
        clearInterval(intervalId);
      }

      // 每隔5秒调用一次fetchGenerateDlXX
      intervalId = setInterval(async () => {
        try {
          const response = await fetchGenerateDlXX();
          if (response && response.data) {
            statusMessage.value = response.data; // 更新状态信息

            // 检查状态码是否为0，如果是则跳转到about页面
            if (statusMessage.value === 300) {
              router.push({ name: 'About' });
              clearInterval(intervalId!); // 清除轮询
            }
          } else {
            throw new Error('状态信息无效');
          }
          console.log('Fetch Generate DlXX Response:', response);
        } catch (error) {
          console.error('轮询请求失败:', error);
          // alert('轮询请求失败，请重试。');
        }
      }, 5000); // 5000毫秒即5秒
    };

    // 清理定时器以防止内存泄漏
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      qrCodeSrc,
      handleFetchQRCode,
      loading,
      statusMessage,
    };
  },
});
</script>

<style scoped>
.login-container {
  text-align: center;
  margin-top: 50px;
}

.qr-code-container {
  margin-top: 20px;
}

.qr-code-container img {
  max-width: 100%;
  height: auto;
}

.status-message {
  margin-top: 20px;
  font-size: 1.2em;
  color: #333;
}
</style>
