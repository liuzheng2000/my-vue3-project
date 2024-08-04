<template>
  <div>
    <!-- 头部区域 -->
    <header :style="{ backgroundImage: `url(${headerBg})` }" class="header">
      <!-- 顶部 -->
      <div class="header-Top">
        <div class="top">
          <div class="top-nav">
            <!-- 导航栏左 -->
            <div class="top-nav-left">
              <ul>
                <li><i :style="{ backgroundImage: `url(${icon3})` }"></i><a href="#">主站</a></li>
                <li><a href="#">音频</a></li>
                <li><a href="#">游戏中心</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">会员购</a></li>
                <li><a href="#">漫画</a></li>
                <li><a href="#">BW</a></li>
                <li><a href="#">70年</a></li>
                <li class="lii">
                  <b :style="{ backgroundImage: `url(${icon3})` }"></b><a href="#">下载APP</a>
                  <div class="down-img"></div>
                </li>
              </ul>
            </div>

            <!-- 导航栏右 -->
            <div class="top-nav-right">
              <ul>
                <li>
                  <a href="#"><img :src="require('../images/header/qingyun.webp')" width=""></a>
                </li>
                <li><a href="#">大会员</a></li>
                <li><a href="#">消息</a></li>
                <li><a href="#">动态</a></li>
                <li><a href="#">稍后再看</a></li>
                <li><a href="#">收藏</a></li>
                <li><a href="#">历史</a></li>
                <li><a href="#">投稿</a></li>
              </ul>
            </div>

            <!-- logo -->
            <div id="header-logon" :style="{ backgroundImage: `url(${logo_bg})` }"></div>

            <!-- 搜索框 -->
            <div id="form">
              <div class="search">
                <div class="list">
                  <span :style="{ backgroundImage: `url(${icon3})` }">排行榜</span>
                </div>
                <input type="text" placeholder="我的阴阳师">
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 主体部分 -->
    <main>
      <!-- 导航 -->
      <nav>
        <ul class="menu">
          <li><a href="#"><span :style="{ backgroundImage: `url(${icon3})` }"></span><em>首页</em></a></li>
          <li><a href="#"><span>999</span><em>动画</em></a></li>
          <li><a href="#"><span>999</span><em>番剧</em></a></li>
          <li><a href="#"><span>999</span><em>音乐</em></a></li>
          <li><a href="#"><span>999</span><em>舞蹈</em></a></li>
          <li><a href="#"><span>999</span><em>游戏</em></a></li>
          <li><a href="#"><span>999</span><em>科技</em></a></li>
          <li><a href="#"><span>999</span><em>生活</em></a></li>
          <li><a href="#"><span>999</span><em>鬼畜</em></a></li>
          <li><a href="#"><span>999</span><em>时尚</em></a></li>
          <li><a href="#"><span>999</span><em>娱乐</em></a></li>
          <li><a href="#"><i :style="{ backgroundImage: `url(${icon3})` }"></i><em>影视</em></a></li>
          <li><a href="#"><i :style="{ backgroundImage: `url(${icon3})` }"></i><em>专栏</em></a></li>
          <li><a href="#"><i :style="{ backgroundImage: `url(${icon3})` }"></i><em>广场</em></a></li>
          <li><a href="#"><i :style="{ backgroundImage: `url(${icon3})` }"></i><em>小黑屋</em></a></li>
          <li><a href="#"><img :src="require('../images/header/b1a3c53168f30abc889c4d1ab35bdc814ada680b.gif')"
                alt=""></a></li>
        </ul>
      </nav>

      <!-- 轮播图1 -->
      <div class="banner-one">
        <ul>
          <li><img :src="require('../images/banner/left/1.webp')"></li>
          <li><img :src="require('../images/banner/left/2.webp')"></li>
          <li><img :src="require('../images/banner/left/3.webp')"></li>
          <li><img :src="require('../images/banner/left/4.webp')"></li>
          <li><img :src="require('../images/banner/left/5.webp')"></li>
          <a href="#"></a>
          <div class="dot">
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </ul>
      </div>

      <!-- 展示图-->
      <div class="banner-two">
        <div class="banner-two-wrap">
          <ul>
            <li><a href=""><img :src="require('../images/banner/right/11.jpg')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/12.webp')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/13.jpg')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/14.webp')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/15.webp')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/16.webp')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/17.jpg')"></a></li>
            <li><a href=""><img :src="require('../images/banner/right/18.jpg')"></a></li>
          </ul>
        </div>
      </div>

      <!-- 推荐 -->
      <div class="promote">
        <div class="promote-left">
          <div class="promote-title">
            <span :style="{ backgroundImage: `url(${icon3})` }"></span>
            <h2>推荐</h2>
            <ul>
              <li><a href="#">阴阳师式神百鬼夜行(๑•̀ㅂ•́)و✧</a></li>
              <li><a href="#">我的老婆青行灯</a></li>
              <li><a href="#">可以！这很NICE (｡•̀◡-)✧</a></li>
            </ul>
          </div>

          <div class="promote-content">
            <div><img :src="require('../images/list-pic/21.webp')"><a href="">【☂】·本作品由女孩子·分享</a></div>
            <div><img :src="require('../images/list-pic/22.webp')"><a href="">【府城夜行】·本作品由染笙·分享</a></div>
            <div><img :src="require('../images/list-pic/23.jpg')"><a href="">【陰陽師Onmyoji】·夏日花火浴衣祭·本作品由俄╮冷血不·分享</a></div>
            <div><img :src="require('../images/list-pic/24.webp')"><a href="">【灯夜游春】·本作品由楚星·分享</a></div>
            <div><img :src="require('../images/list-pic/25.webp')"><a href="">【日曜新生】·本作品由染笙·分享</a></div>
          </div>
        </div>

        <div class="promote-right">
          <div class="count">
            <span>在线人数：201018</span>
            <span>投喂式神：9431</span>
          </div>
          <div class="img">
            <img :src="require('../images/list-pic/26.webp')" alt="【思之深海·化作鯨落】·本作品由染笙·分享">
          </div>
        </div>
      </div>

      <!-- 美图欣赏 -->
      <div id="part_fun">
        <div class="fun_top">
          <a class="part_tit" href="#" title="美图欣赏"></a>
          <div class="fun_box">
            <a href="#" title="电子杂志四季">
              <img :src="require('../images/part_fun/74d00cea-10a1-4444-afb5-d944e903ab92.jpg')" alt="电子杂志四季">
            </a>
            <a href="#" title="阴阳师主题cos周">
              <img :src="require('../images/part_fun/b48f0dbe-2922-4f3b-8858-27fb901622e4.jpg')" alt="阴阳师主题cos周">
            </a>
            <a href="#" title="平安京电台">
              <img :src="require('../images/part_fun/00126f3a-f0da-4c6b-b47b-d122bfcf6cb4.jpg')" alt="平安京电台">
            </a>
            <a href="#" title="平安物语">
              <img :src="require('../images/part_fun/e8985f58-81c3-4366-8fef-791423c01b3e.gif')" alt="平安物语">
            </a>
            <a href="#" title="官方漫画">
              <img :src="require('../images/part_fun/b94fe4de-0b77-446c-a898-5095bcf3a458.png')" alt="官方漫画">
            </a>
          </div>
        </div>

        <div class="fun_center">
          <a href="#" title="left"></a>
          <a href="#" title="right"></a>
        </div>
        <div class="fun_bottom">
          <img :src="require('../images/part_fun/fun_bg_99effa1.jpg')" alt="美图欣赏">
        </div>
      </div>
    </main>

    <!-- 底部信息 -->
    <footer>
      <div class="footer-wrap">
        <!-- 上部分 -->
        <div class="fot-top">
          <div class="bill">
            <h5>Bilibili</h5>
            <ul>
              <li>关于我们</li>
              <li>友情链接</li>
              <li>联系我们</li>
              <li>加入我们</li>
            </ul>
            <img :src="require('../images/footer/1.png')">
          </div>
          <div class="help">
            <h5>帮助</h5>
            <ul>
              <li>帮助中心</li>
              <li>补档认领处</li>
              <li>侵权申诉</li>
              <li>建议/BUG汇报</li>
            </ul>
          </div>
          <div class="transmit">
            <h5>传输门</h5>
            <ul>
              <li>高级弹幕</li>
              <li>名人堂活动</li>
              <li>专题页</li>
              <li>资讯</li>
              <li>壁纸站</li>
              <li>分院帽计划</li>
              <li>活动中心</li>
            </ul>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="fot-bot">
          <div class="join" :style="{ backgroundImage: `url(${footer2})` }"></div>
          <div class="info">
            <p>广播电视节目制作经营许可证：（沪）字第1248号</p>
            <p>网络文化经营许可证：沪网文[2020]1801-020号</p>
            <p>信息网络传播视听节目许可证：0910417</p>
            <p>上海互联网举报中心</p>
          </div>
          <div class="info">
            <p>互联网ICP备案：沪ICP备13002172号-3</p>
            <p>沪ICP证：沪B2-20100043</p>
            <p>违法不良信息举报邮箱：help@bilibili.com</p>
            <p>违法不良信息举报电话：4000233233 转 3</p>
          </div>
          <div class="relation">
            <div class="mobile" :style="{ backgroundImage: `url(${icon3})` }">
              <p>手机端下载</p>
            </div>
            <div class="siNa" :style="{ backgroundImage: `url(${icon3})` }">
              <p>新浪微博</p>
            </div>
            <div class="WeChat" :style="{ backgroundImage: `url(${icon3})` }">
              <p>官方微信</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import '../css/bilibili/footer.css';
import '../css/bilibili/header.css';
import '../css/bilibili/init.css';
import '../css/bilibili/main.css';
import { defineComponent } from 'vue';
import headerBg from '../images/header/bg.png'; // 引入背景图
import logo_bg from '../images/header/logo-bg.png'; // 引入背景图
import icon3 from '../images/icons3.png'; // 引入背景图
import footer2 from '../images/footer/2.png'; // 引入背景图

export default defineComponent({
  name: 'About',
  data() {
    return {
      headerBg, // 将背景图路径存储到 data
      logo_bg,
      icon3,
      footer2
    };
  }
});
</script>

<style scoped></style>
