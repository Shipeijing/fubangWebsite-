<template>
  <div>
    <div
      @mouseenter="openheaderImg"
      @mouseleave="clearheaderImg"
      :class="
        headerImgswitch == true
          ? 'headerImg headerImgopen'
          : 'headerImg headerImgout'
      "
    >
      <img
        :class="headerImg"
        :src="$store.state.baseImgUrl + carouselList[0]"
        alt=""
      />
      <img
        :class="headerImg"
        :src="$store.state.baseImgUrl + carouselList[0]"
        alt=""
      />
    </div>

    <div class="hu-nav">
      <div class="content">
        <span
          @click="nav = '集团介绍'"
          :class="nav == '集团介绍' ? 'active' : ''"
          >集团介绍</span
        ><span
          style="margin-left:40px;"
          @click="nav = '组织架构'"
          :class="nav == '组织架构' ? 'active' : ''"
          >组织架构</span
        >
        <span
          style="margin-left:40px;"
          @click="nav = '企业文化'"
          :class="nav == '企业文化' ? 'active' : ''"
          >企业文化</span
        >
        <span
          style="margin-left:40px;"
          @click="nav = '资质荣誉'"
          :class="nav == '资质荣誉' ? 'active' : ''"
          >资质荣誉</span
        >
        <span
          style="margin-left:40px;"
          @click="nav = '发展历程'"
          :class="nav == '发展历程' ? 'active' : ''"
          >发展历程</span
        >
        <span
          ><img src="@/static/img/dingwei.png" alt="" />关于我们 -
          {{ nav }}</span
        >
      </div>
    </div>

    <div
      class="jituan"
      v-show="nav == '集团介绍'"
      @mouseenter="jituand1img = true"
      @mouseleave="jituand1img = false"
    >
      <div class="content">
        <div class="jituan-d1">
          <div>
            <span>集团介绍</span>
            <span>{{ groupIntroduction[0].title }}</span>
            <span>{{ groupIntroduction[0].remark }}</span>
            <span></span>
            <p v-html="groupIntroduction[0].content"></p>
          </div>
          <div class="lanbg">
            <img
              :class="
                jituand1img == true ? 'openjituand1img' : 'outjituand1img'
              "
              :src="$store.state.baseImgUrl + groupIntroduction[0].image"
              alt=""
            />
            <img
              style="opacity:0;"
              :src="$store.state.baseImgUrl + groupIntroduction[0].image"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="jituan-d2-bg">
        <div class="content">
          <div class="jituan-d1 jituan-d2">
            <div>
              <img src="@/static/img/zhongguo.png" alt="" />
            </div>
            <div>
              <span>品牌简介</span>
              <span>{{ grouIntroduction[0].title }}</span>
              <span>{{ grouIntroduction[0].remark }}</span>
              <span></span>
              <p v-html="grouIntroduction[0].content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="zuzhi" v-show="nav == '组织架构'">
      <ul>
        <li v-for="(item, index) in organization">
          <img
            class="xinwenimg"
            v-if="index != 1"
            :src="$store.state.baseImgUrl + item.image"
            alt=""
          />
          <img
            v-if="index != 1"
            src="@/static/imgTemplate/xinwenbg.png"
            alt=""
          />
          <div>
            <h2 :class="index == 1 ? 'zuzhiright' : ''">
              <img src="@/static/img/xiegang.png" alt="" />{{ item.title
              }}<img src="@/static/img/xiegang.png" alt="" />
            </h2>
            <p :class="index == 1 ? 'zuzhiright' : ''">
              {{ item.remark }}
            </p>
            <p
              :class="index == 1 ? 'zuzhiright' : ''"
              v-html="item.content"
            ></p>
            <span :class="index == 1 ? 'zuzhiright' : ''"> </span>
          </div>
          <img
            class="xinwenimg xinwenimg-right"
            v-if="index == 1"
            :src="$store.state.baseImgUrl + item.image"
            alt=""
          />
          <img
            v-if="index == 1"
            src="@/static/imgTemplate/xinwenbg.png"
            alt=""
          />
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <div class="qiye" v-show="nav == '企业文化'">
      <div class="content">
        <div class="qiye-d1">
          <div>
            <div>SINCE 2001</div>
            <div>
              富邦集团专业塑造品牌，经验积累卓越，服务提升价值，合作感受信赖
            </div>
            <div>
              <span
                >{{ xiangmuNum }}+
                <p>完成项目</p></span
              ><span
                >{{ gongsiNum }}+
                <p>附属公司</p></span
              ><span
                >{{ chanliangNum }}+
                <p>年生产量（万）</p></span
              ><span
                >{{ peisongNum }}+
                <p>年配送（万）</p></span
              >
            </div>
          </div>
          <div>
            <h4>{{ companyCulture[0].remark }}</h4>
            <p
              style="font-size:12px;color:#797979;margin-top:20px;"
              v-html="companyCulture[0].content"
            ></p>
          </div>
        </div>
      </div>
      <div class="qiye-d2">
        <div class="content">
          <div>
            <p class="qiye-d2-div-p1">
              TO CREATE A BETTER SOCIETY WITH OUR EXISTENCE
            </p>
            <span style="color:#fff;font-style: italic;"
              >希望社会因我们的存在而变得更加美好</span
            >
            <img src="@/static/img/xiaowu.png" alt="" />
          </div>
          <div>
            <p class="qiye-d2-div-p2">
              专用塑造品牌，经验累积卓越，服务提升价值，合作感受信赖！在长期的市场打拼中，我们不断迎接挑战，赢得了客户的广泛认可。
            </p>
            <span>富邦实业集团有限公司</span>
          </div>
        </div>
      </div>
    </div>

    <div class="zizhi" v-show="nav == '资质荣誉'">
      <div class="zizhinav">
        <span><img src="@/static/img/xiajiantou.png" alt=""/></span>HISTORICAL
        PROCESS_
      </div>
      <ul class="zizhiul">
        <li
          v-for="(item, index) in timeNewsy"
          @mouseleave="zizhiululbg = null"
          @mouseenter="zizhiululbg = index"
        >
          <div
            style="position: absolute;"
            :class="zizhiululbg == index ? 'zizhiululbg' : ''"
          ></div>
          <span>{{ item[0].year }}</span>
          <ul>
            <li
              v-for="(itemi, indexi) in item"
              @mouseenter="zizhiulchangebg = index + '' + indexi"
              @mouseleave="zizhiulchangebg = null"
            >
              <span
                :class="
                  zizhiulchangebg == index + '' + indexi
                    ? 'zizhiulchangebg'
                    : ''
                "
              ></span
              ><span></span>
              <div>
                <p>{{ itemi.year }} 年 {{ itemi.month }} 月</p>
                <p v-html="itemi.context"></p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="fazhan" v-show="nav == '发展历程'">
      <div class="fazhannav">
        <span><img src="@/static/img/xiajiantou.png" alt=""/></span>HISTORICAL
        PROCESS_
      </div>
      <div>
        <ul class="fazhanul">
          <div class="fazhanulxian"></div>
          <li
            v-for="(item, index) in timeNewsf"
            @mouseenter="fazhanulchangebg = index"
            @mouseleave="fazhanulchangebg = null"
          >
            <div
              style="position: absolute;"
              :class="fazhanulchangebg == index ? 'zizhiululbg' : ''"
            ></div>
            <span>
              <span
                :class="fazhanulchangebg == index ? 'fazhanulchangebg' : ''"
              ></span>
            </span>

            <span></span><span>{{ item.year }}</span>
            <div>
              <!-- <img src="@/static/img/n3.png" alt="" /> -->
              <p v-html="item.context"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/aboutUs")
    return {
      carouselList: data.carouselList,
      groupIntroduction: data.groupIntroduction,
      companyCulture: data.companyCulture,
      organization: data.organization,
      timeNewsy: data.timeNewsy,
      timeNewsf: data.timeNewsf,
      grouIntroduction: data.brandIntroduction
    }
  },
  data () {

    return {
      headerImgswitch: false,
      xiangmuNum: 120,
      gongsiNum: 0,
      chanliangNum: 130,
      peisongNum: 0,
      zizhiulchangebg: '',
      fazhanulchangebg: null,
      zizhiululbg: null,
      headerImg: '',
      jituand1img: true,
      nav: '集团介绍',
    }
  },
  beforeMount () {
    if (sessionStorage.getItem('gro-nav') != undefined) {
      this.nav = sessionStorage.getItem('gro-nav')
    }
  },
  watch: {
    nav () {
      sessionStorage.setItem('gro-nav', this.nav)
      if (this.nav == '企业文化') {
        var that = this
        var xiangmuNumIt = setInterval(function () {
          if (that.xiangmuNum == 150) {
            clearInterval(xiangmuNumIt)
          } else {
            that.xiangmuNum = that.xiangmuNum + 1
          }
        }, 50)
        var chanliangNumIt = setInterval(function () {
          if (that.chanliangNum == 160) {
            clearInterval(chanliangNumIt)
          } else {
            that.chanliangNum = that.chanliangNum + 1
          }
        }, 50)
        var gongsiNumIt = setInterval(function () {
          if (that.gongsiNum == 3) {
            clearInterval(gongsiNumIt)
          } else {
            that.gongsiNum = that.gongsiNum + 1
          }
        }, 200)
        var peisongNumIt = setInterval(function () {
          if (that.peisongNum == 11) {
            clearInterval(peisongNumIt)
          } else {
            that.peisongNum = that.peisongNum + 1
          }
        }, 100)
      } else {
        this.xiangmuNum = 120
        this.gongsiNum = 0
        this.chanliangNum = 130
        this.peisongNum = 0
      }
    }
  },
  mounted () {
    var that = this
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop == 0) {
        that.headerImgswitch = false
      } else {
        that.headerImgswitch = true
      }
    }, true);
  },
  methods: {
    openheaderImg () {
      this.headerImg = 'openheaderImg'
    },
    clearheaderImg () {
      this.headerImg = 'clearheaderImg'
    },
  }
}
</script>
<style>
.fazhanul .table-h span,
p {
  display: block !important;
}
.fazhanulchangebg {
  background: #3a82d4 !important;
}
.fazhanul li > div {
  width: 60%;
}
.fazhanul li > div img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: block;
}
.fazhanul li div > p {
  line-height: 24px;
  font-size: 14px;
}
.fazhanul li > span:nth-of-type(1) {
  display: block;
  margin-left: 10%;
  padding-left: 7.5px;
}
.fazhanul li > span > span {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 2px solid #3a82d4;
  border-radius: 50%;
  display: block;
}
.fazhanul li > span:nth-of-type(2) {
  width: 3%;
  height: 2px;
  background: #e9e9e9;
  display: block;
  margin-top: 7px;
  margin-left: 3%;
  margin-right: 3%;
}
.fazhanul li > span:nth-of-type(3) {
  background: #3a82d4;
  color: #ffffff;
  width: 100px;
  line-height: 30px;
  height: 30px;
  text-align: center;
  border-radius: 20px;
  display: block;
  margin-top: -7px;
  margin-right: 3%;
}
.fazhanul li {
  display: flex;
  flex-wrap: nowrap;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
}
.fazhanulxian {
  width: 16px;
  height: 100%;
  left: 10%;
  border-right: 2px solid #e9e9e9;
  top: 0;
  position: absolute;
}
.fazhanul {
  width: 100%;
  padding-bottom: 100px;
  position: relative;
}
.zizhiululbg {
  width: 0%;
  height: 100%;
  left: 50%;
  top: 0%;
  animation: zizhiululbg 0.5s ease-out forwards;
  background: #f7f8fa;
  z-index: -1;
}
@keyframes zizhiululbg {
  0% {
    width: 0%;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
}
.zizhiul {
  margin-bottom: 50px;
}
.zizhiul > li > ul {
  border-top: 2px solid #e9e9e9;
  margin-top: 20px;
  margin-left: 20px;
  padding-left: 10%;
  width: 90%;
}
.zizhiul > li > ul > li {
  border-left: 2px solid #e9e9e9;
  padding-top: 30px;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
.zizhiul > li > ul > li > span:nth-of-type(1) {
  width: 16px;
  height: 16px;
  border: 2px solid #e9e9e9;
  border-radius: 50%;
  background: #ffffff;
  display: inline-block;
  margin-left: -9px;
}
.zizhiul > li > ul > li > span:nth-of-type(2) {
  width: 40px;
  height: 2px;
  background: #e9e9e9;
  display: inline-block;
  margin-left: 20px;
  margin-top: 7px;
}
.zizhiul > li > ul > li > div {
  margin-left: 20px;
  margin-top: -8px;
}
.zizhiul > li > ul > li > div > p {
  display: block;
}
.zizhiul > li > ul > li > div > p:nth-of-type(1) {
  color: #3a82d4;
  font-size: 16px;
  margin: 5px auto;
}
.zizhiul > li > ul > li > div > p:nth-of-type(2) {
  font-size: 14px;
}
.zizhiul > li {
  width: 100%;
  padding: 20px 10%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
}
.zizhiulchangebg {
  background: #3a82d4 !important;
}
.zizhiul > li > span {
  font-size: 26px;
  color: #3a82d4;
}
.zizhinav span {
  display: inline-block;
  background: #3a82d4;
  padding: 5px 9px;
  border-radius: 50%;
  margin-right: 20px;
}
.zizhinav span img {
  width: 14px;
}
.zizhinav {
  color: #3a82d4;
  padding: 40px 20% 0px 20%;
  margin-bottom: 20px;
}
.fazhannav span {
  display: inline-block;
  background: #3a82d4;
  padding: 5px 9px;
  border-radius: 50%;
  margin-right: 20px;
}
.fazhannav span img {
  width: 14px;
}
.fazhannav {
  color: #3a82d4;
  padding: 40px 10% 0px 10%;
}
.qiye-d2 > div > div {
  width: 50%;
  float: left;
  padding: 30px 40px 30px 30px;
  position: relative;
}
.qiye-d2-div-p2 {
  font-size: 14px;
  color: #797979;
}
.qiye-d2-div-p1 {
  font-size: 26px;
  color: #ffffff;
  font-style: italic;
}
.qiye-d2 > div span {
  font-size: 16px;
  display: block;
  margin-top: 20px;
}
.qiye-d2 > div > div:nth-of-type(2) {
  background: #f1f1f1;
}
.qiye-d2 img {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 300px;
}
.qiye-d2 {
  width: 100%;
  background: #3a82d4;
  padding: 60px 0% 130px 0%;

  overflow: hidden;
}
.qiye-d1 > div div:nth-of-type(1) {
  font-size: 40px;
  font-family: "jituan";
  color: #797979;
}
.qiye-d1 > div div:nth-of-type(2) {
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0px;
  color: #2a2a2a;
}
.qiye-d1 > div div span {
  width: 250px;
  color: #3a82d4;
  font-size: 40px;
  font-weight: 600;
  display: inline-block;
  margin-top: 15px;
}
.qiye-d1 > div div span p {
  font-size: 14px;
  color: #797979;
  display: inline-block !important;
}
.qiye-d1 > div {
  width: 49%;
}
.qiye-d1 {
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.zuzhiright {
  float: right;
  text-align: right;
  justify-content: flex-end;
}
.zuzhi ul li div h2 {
  font-size: 20px;
  display: flex;
  width: 100%;
  max-height: 27px;
}
.zuzhi ul li div h2 img {
  width: 7px;
  margin: 0px 15px;
}
.zuzhi ul li div > span {
  width: 30px;
  height: 3px;
  background: #2a2a2a;
  border-radius: 2px;
  display: block;
}
.zuzhi ul li div > p {
  font-size: 12px;
  color: #2a2a2a;
  margin: 20px 0px;
  width: 100%;
}
.zuzhi ul li div {
  width: 50%;
  padding: 3%;
}
@keyframes zuzhiopen {
  0% {
    transform: translateX(20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes zuzhiopen2 {
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.zuzhi ul li img {
  width: 50%;
  height: 100%;
}
.zuzhi ul li:nth-of-type(1) {
  animation: zuzhiopen 0.5s ease-out forwards;
}
.zuzhi ul li:nth-of-type(3) {
  animation: zuzhiopen 0.5s ease-out forwards;
}
.zuzhi ul li:nth-of-type(2) {
  animation: zuzhiopen2 0.5s ease-out forwards;
}
.zuzhi ul li {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}
.lanbg {
  width: 561px !important;
  height: 379px;
  border: 2px solid #3a82d4;
  margin-top: 50px;
  margin-left: 50px;
  position: relative;
}
.jituan-d1 div img {
  width: 100%;
  height: 100%;
}
.openjituand1img {
  position: absolute;
  animation: openjituand1img 0.5s forwards;
}
@keyframes openjituand1img {
  0% {
    top: 0%;
    left: 0%;
  }
  100% {
    top: -5%;
    left: 5%;
  }
}
.outjituand1img {
  position: absolute;
  animation: outjituand1img 0.5s forwards;
}
@keyframes outjituand1img {
  0% {
    top: -5%;
    left: 5%;
  }
  100% {
    top: 0%;
    left: 0%;
  }
}
.jituan-d1 div span {
  display: block;
  margin: 8px 0px;
}
.jituan-d1 div > p {
  color: #2a2a2a;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  display: block;
  width: 100%;
}
.jituan-d1 div span:nth-of-type(1) {
  color: #3a82d4;
  font-size: 38px;
  letter-spacing: 10px;
  font-family: "jituan";
}
.jituan-d1 div span:nth-of-type(2) {
  color: #3a82d4;
  font-size: 20px;
  font-weight: 600;
}
.jituan-d1 div span:nth-of-type(3) {
  color: #3a82d4;
  font-size: 14px;
}
.jituan-d1 div span:nth-of-type(4) {
  background: #3a82d4;
  width: 50px;
  height: 3px;
  border-radius: 2px;
}
.jituan-d1 div {
  width: 46%;
}
.jituan-d1 {
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  animation: jituand1 ease-out 0.5s forwards;
}
@keyframes jituand1 {
  0% {
    transform: scale(0.9, 0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
.jituan-d2 {
  padding: 60px 0% 60px 0%;
  margin: 0;
}
.jituan-d2-bg {
  width: 100%;
  background: #f4f4f4;
}
.jituan-d2 div:nth-of-type(2) {
  margin-left: 50px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
}
.jituan-d2 div span:nth-of-type(1) {
  width: 100%;
  text-align: right;
}
.jituan-d2 div span:nth-of-type(2) {
  width: 100%;
  text-align: right;
}
.jituan-d2 div span:nth-of-type(3) {
  width: 100%;
  text-align: right;
}
</style>
