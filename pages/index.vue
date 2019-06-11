<template>
  <div>
    <el-carousel>
      <!-- 设置轮播图自适应图片高度 -->
      <div style="opacity:0;">
        <img
          class="rotation-img"
          :src="$store.state.baseImgUrl + rotationimg[0]"
          alt=""
        />
      </div>
      <el-carousel-item v-for="item in rotationimg" :key="item">
        <img
          class="rotation-img"
          :src="$store.state.baseImgUrl + item"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <div class="d-2">
      <div class="content">
        <div class="d-2-content">
          <div
            @mouseenter="changed2Effects(1)"
            @mouseleave="changed2Effects(0)"
          >
            <img
              v-if="d2Effects == 1 || d2Effects == 375"
              class="d-2-div-img"
              :src="$store.state.baseImgUrl + fbCompany[0].image"
              alt=""
            />
            <img
              v-else
              class="d-2-div-imgout"
              src="@/static/img/0.png"
              alt=""
            />
            <span v-if="d2Effects == 1" style="color:#e95b4f;">{{
              fbCompany[0].title
            }}</span>
            <span v-else>{{ fbCompany[0].title }}</span>
            <p>{{ fbCompany[0].remark }}</p>
          </div>
          <div
            @mouseenter="changed2Effects(2)"
            @mouseleave="changed2Effects(0)"
          >
            <img
              v-if="d2Effects == 2 || d2Effects == 375"
              class="d-2-div-img"
              :src="$store.state.baseImgUrl + fbCompany[1].image"
              alt=""
            />
            <img
              v-else
              class="d-2-div-imgout"
              src="@/static/img/1.png"
              alt=""
            />
            <span v-if="d2Effects == 2" style="color:#e95b4f;">{{
              fbCompany[1].title
            }}</span>
            <span v-else>{{ fbCompany[1].title }}</span>
            <p>{{ fbCompany[1].remark }}</p>
          </div>
          <div
            @mouseenter="changed2Effects(3)"
            @mouseleave="changed2Effects(0)"
          >
            <img
              v-if="d2Effects == 3 || d2Effects == 375"
              class="d-2-div-img"
              :src="$store.state.baseImgUrl + fbCompany[2].image"
              alt=""
            />
            <img
              v-else
              class="d-2-div-imgout"
              src="@/static/img/2.png"
              alt=""
            />
            <span v-if="d2Effects == 3" style="color:#e95b4f;">{{
              fbCompany[2].title
            }}</span>
            <span v-else>{{ fbCompany[2].title }}</span>
            <p>{{ fbCompany[2].remark }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="d-3">
        <div class="subheading">
          <span>工程设备</span>
          <p>OUR PROFESSIONAL TEAM</p>
        </div>
        <div class="d-3-body">
          <ul>
            <li
              v-for="(item, index) in fbEquipment"
              @mouseenter="changed3Effects(index)"
              @click="openEqui"
              :style="d3Effects == index ? 'background-color: #3a82d4;' : ''"
            >
              <img :src="$store.state.baseImgUrl + item.image" alt="" /><span
                :style="d3Effects == index ? 'color:#fff;' : ''"
                >{{ item.title }}</span
              >
              <p :style="d3Effects == index ? 'color:#fff;' : ''">
                {{ item.remark }}
              </p>
              <span :style="d3Effects == index ? 'color:#fff;' : ''">
                查看详情 >>></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-4">
      <div class="content">URIN INFORMATION</div>
      <span class="content">富邦资讯</span>
    </div>
    <div class="content">
      <div class="d-5">
        <div class="d-5-d" @click="openNews(topNewsList[0].id)">
          <img :src="$store.state.baseImgUrl + topNewsList[0].image" alt="" />
          <div
            class="d-5-body"
            @mouseenter="d5body2bg = 100"
            @mouseleave="d5body2bg = null"
          >
            <div
              style="position: absolute;"
              :class="d5body2bg == 100 ? 'd5body2bg' : ''"
            ></div>
            <div class="d-5-body-1">
              <div>{{ topNewsList[0].year }}</div>
              <span>{{ topNewsList[0].md }}</span>
            </div>
            <div class="d-5-body-2">
              <span>{{ topNewsList[0].title }}</span>
              <p>
                {{ topNewsList[0].remark }}
              </p>
              <div class="d-5-body-2-button">DETAILS &nbsp;&nbsp;>></div>
            </div>
          </div>
        </div>
        <div class="d-5-2">
          <div class="d-5-2-border"></div>
          <div class="d-5-2-header">
            <span
              :class="newcategory == 0 ? 'newcategory' : ''"
              @click="newcategory = 0"
              >公司新闻</span
            ><span
              :class="newcategory == 1 ? 'newcategory' : ''"
              @click="newcategory = 1"
              >行业新闻</span
            >
            <span @click="openNews('all')">+MORE</span>
          </div>
          <div
            v-for="(item, index) in newcategoryList"
            class="d-5-body2"
            @mouseenter="d5body2bg = index"
            @mouseleave="d5body2bg = null"
            @click="openNews(item.id)"
          >
            <div
              style="position: absolute;"
              :class="d5body2bg == index ? 'd5body2bg' : ''"
            ></div>
            <div class="d-5-body-1 w1">
              <div>{{ item.year }}</div>
              <span>{{ item.md }}</span>
            </div>
            <div class="d-5-body-2 w2 w2b">
              <span>{{ item.title }}</span>
              <p>
                {{ item.remark }}
              </p>
            </div>
            <div
              v-if="item.top == '是'"
              style="background: #e95b4f;"
              class="d-5-body-3"
            >
              &nbsp;HOT
            </div>
            <div v-else style="background: #939393;" class="d-5-body-3">
              &nbsp;HOT
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-6">
      <div class="content">
        <div class="subheading">
          <span class="hui">工程项目</span>
          <p>OUR PROFESSIONAL TEAM</p>
        </div>
        <ul class="d-6-ul">
          <li
            v-for="(item, index) in fbProject"
            :class="open1149 == true ? 'open1149' : ''"
            @mouseenter="changed6Effects(index)"
            @mouseleave="changed6Effects('1' + index)"
            @click="openEngi"
          >
            <img
              :class="d6EffectsList[index]"
              :src="$store.state.baseImgUrl + item.image"
              alt=""
            />
            <div :class="d6EffectsList[index + 4]">
              <span :style="d6Effects == index ? 'color:#fff;' : ''">{{
                item.title
              }}</span>
              <p :style="d6Effects == index ? 'color:#fff;' : ''">
                <img
                  v-if="d6Effects == index"
                  src="@/static/img/dizhi1.png"
                  alt=""
                />
                <img v-else src="@/static/img/dizhi.png" alt="" />{{
                  item.remark
                }}
              </p>
              <div
                :style="d6Effects == index ? 'backgroundColor:#fff;' : ''"
              ></div>
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
    let { data } = await $axios.get("/index")
    return {
      rotationimg: data.carouselList,
      fbCompany: data.fbCompany,
      fbEquipment: data.fbEquipment,
      firmNewsList: data.firmNewsList,
      industryNewsList: data.industryNewsList,
      topNewsList: data.topNewsList,
      fbProject: data.fbProject
    }
  },
  data () {
    return {

      d5body2bg: null,
      newcategory: 0,
      newcategoryList: [],
      d2Effects: null,
      d3Effects: 0,
      d6Effects: null,
      open1149: false,
      d6EffectsList: [
        'outImg6', 'outImg6', 'outImg6', 'outImg6',
        'bg-black outli', 'bg-black outli', 'bg-black outli', 'bg-black outli'
      ]
    }
  },
  watch: {
    newcategory () {
      if (this.newcategory == 0) {
        this.newcategoryList = this.firmNewsList
      } else {
        this.newcategoryList = this.industryNewsList
      }
    }
  },
  mounted () {
    this.newcategoryList = this.firmNewsList
    window.addEventListener('scroll', this.handleScroll)
    var that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        if (window.screenWidth < 1000) {
          that.d2Effects = 375
          that.d3Effects = 375
          that.d6Effects = 375
        }

      })()
    }

  },
  methods: {
    openNews (id) {
      if (id != 'all') {
        // var tempwindow = window.open();
        // tempwindow.location = '/newsInformation?id=' + id
        this.$router.push({ path: '/newsInformation', query: { id: id } })
      } else {
        this.$router.push({ path: '/newsInformation' })
      }
    },
    openEqui () {
      this.$router.push({ path: '/equipmentDisplay' })
    },
    openEngi () {
      this.$router.push({ path: '/engineeringProject' })
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
      if (scrollTop > 1149 && scrollLeft > 1200) {
        this.open1149 = true
      } else {
        this.open1149 = false
      }
    },
    changed2Effects (i) {
      this.d2Effects = i
    },
    changed3Effects (i) {
      this.d3Effects = i
    },
    changed6Effects (i) {
      console.log(i)
      this.d6Effects = i
      if (i == 0) {
        this.d6EffectsList[0] = 'openImg6'
        this.d6EffectsList[4] = 'bg-black openli'
      } else if (i == 1) {
        this.d6EffectsList[1] = 'openImg6'
        this.d6EffectsList[5] = 'bg-black openli'
      } else if (i == 2) {
        this.d6EffectsList[2] = 'openImg6'
        this.d6EffectsList[6] = 'bg-black openli'
      } else if (i == 3) {
        this.d6EffectsList[3] = 'openImg6'
        this.d6EffectsList[7] = 'bg-black openli'
      } else if (i == 10) {
        this.d6EffectsList[0] = 'outImg6'
        this.d6EffectsList[4] = 'bg-black outli'
      } else if (i == 11) {
        this.d6EffectsList[1] = 'outImg6'
        this.d6EffectsList[5] = 'bg-black outli'
      } else if (i == 12) {
        this.d6EffectsList[2] = 'outImg6'
        this.d6EffectsList[6] = 'bg-black outli'
      } else if (i == 13) {
        this.d6EffectsList[3] = 'outImg6'
        this.d6EffectsList[7] = 'bg-black outli'
      }
      else {
        this.d6EffectsList = [
          'outImg6', 'outImg6', 'outImg6', 'outImg6',
          'bg-black outli', 'bg-black outli', 'bg-black outli', 'bg-black outli'
        ]
      }
    }
  }
}
</script>

<style>
.d-6 {
  background-color: #f6f6f6;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.d-6-ul {
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.d-6-ul li {
  width: 250px;
  height: 274.8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
}
.open1149 {
  animation: open1149 1s forwards;
}
@keyframes open1149 {
  0% {
    opacity: 0;
    width: 15%;
  }
  100% {
    opacity: 1;
    width: 23%;
  }
}
.openli {
  animation: openli 1s forwards;
}
.outli {
  animation: outli 1s forwards;
}
@keyframes openli {
  0% {
    top: 170px;
    padding-top: 0px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  100% {
    top: 0px;
    padding-top: 85px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
@keyframes outli {
  0% {
    top: 0px;
    padding-top: 85px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  100% {
    top: 170px;
    padding-top: 0px;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.bg-black {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-bottom: 15px;
  position: absolute;
  top: 170px;
  left: 0px;
}
.d-6-ul li div span {
  width: 100%;
  padding: 20px 10px 0px 10px;
  text-align: center;
  display: block;
  color: #666666;
  font-weight: 900;
}
.d-6-ul li div p {
  width: 100%;
  padding: 5px;
  text-align: center;
  display: block;
  color: #9c9c9c;
  font-size: 12px;
}
.d-6-ul li > div div {
  width: 45px;
  height: 4px;
  background: #989898;
  margin: 5px auto;
  border-radius: 5px;
}
.d-6-ul li div p img {
  width: 8px;
  height: 10px;
  margin-right: 5px;
}
.d-6-ul li > img {
  width: 100%;
  height: 170px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
}
.openImg6 {
  animation: openImg6 1s forwards;
}
.outImg6 {
  animation: outImg6 1s forwards;
}
@keyframes outImg6 {
  0% {
    width: 160%;
    height: 274.8px;
    left: -30%;
  }
  100% {
    width: 100%;
    height: 170px;
    left: 0%;
  }
}
@keyframes openImg6 {
  0% {
    width: 100%;
    height: 170px;
    left: 0px;
  }
  100% {
    width: 160%;
    height: 274.8px;
    left: -30%;
  }
}
.d-5-2-border {
  position: absolute;
  top: 0px;
  left: 100px;
  width: 2px;
  height: 100%;
  background: #f6f6f6;
}
.d-5-2-header span {
  font-size: 18px;
  margin-bottom: 20px;
  padding: 5px 10px;
  cursor: pointer;
}
.d-5-2-header span:nth-child(1) {
  margin-right: 20px;
}
.d-5-2-header span:last-child {
  float: right;
}
.newcategory {
  background: #e95b4f;
  color: #fff;
}
.d-5-2 {
  position: relative;
}
.d-5-body2 {
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  position: relative;
}
.d5body2bg {
  width: 0%;
  height: 100%;
  left: 50%;
  top: 0;
  animation: d5body2bg 0.5s forwards;
  background: #f7f8fa;
  z-index: -1;
}
@keyframes d5body2bg {
  0% {
    width: 0%;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
}
.d-5-body2 > div:nth-child(1) {
  float: left;
}
.d-5-body2 > div:nth-child(2) {
  float: left;
}
.d-5-body2 > div:nth-child(3) {
  float: right;
}
.d-5-body {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  padding: 10px;
}
.d-5-body-1 {
  width: 48px;
  margin-top: 10px;
  text-align: center;
  color: #444444;
}
.w1 {
  width: 100px;
}
.d-5-body-1 div {
  font-size: 24px;
}
.d-5-body-2 {
  width: 80%;
  color: #444444;
  margin: 0px 10px;
}
.w2 {
  width: 65%;
  padding-left: 20px;
  padding-bottom: 10px;
}
.w2b {
  border-bottom: 2px solid #f6f6f6;
}
.d-5-body-2 span {
  font-size: 18px;
  padding: 10px 0px;
  display: block;
  max-height: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.w2 span {
  padding-bottom: 20px;
}
.d-5-body-2 p {
  font-size: 14px;
  line-height: 25px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.d-5-body-2-button {
  border: 0px;
  color: #444444;
  margin: 20px 0px;
  padding: 0px;
}
.d-5-body-3 {
  margin-top: 10px;
  width: 50px;
  height: 23px;
  text-align: center;
  color: #fff;
  clip-path: polygon(
    10% 0%,
    100% 0%,
    100% 100%,
    10% 100%,
    10% 70%,
    0% 50%,
    10% 30%
  );
}
.d-5 {
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.d-5 {
  justify-content: space-between;
  width: 100%;
}
.d-5-2 {
  width: 48%;
}
.d-5-d {
  width: 48%;
}
.d-5-d {
  height: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
}
.d-5-d img {
  width: 100%;
  height: 300px;
}
.el-carousel {
  height: auto;
}
.rotation-img {
  width: 100%;
  height: 100%;
}
.el-carousel__container {
  height: inherit;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.d-2 > div > div div {
  max-width: 25%;
  min-width: 250px;
}
.d-2 div img {
  display: block;
  margin: 20px auto;
  width: 250px;
  height: 150px;
}
.d-2-div-imgout {
  animation: outImg 1s;
}
@keyframes outImg {
  0% {
    opacity: 0;
    width: 150px;
    height: 150px;
  }
  100% {
    opacity: 1;
    width: 250px;
    height: 150px;
  }
}
.d-2-div-img {
  width: 250px;
  height: 150px;
  animation: openImg 1s;
}
@keyframes openImg {
  0% {
    opacity: 0;
    width: 150px;
    height: 150px;
  }
  100% {
    opacity: 1;
    width: 250px;
    height: 150px;
  }
}
.d-2 div span {
  display: block;
  text-align: center;
}

.d-2 div p {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #9d9d9d;
  margin-top: 20px;
}

.d-3 {
  width: 100%;
  padding: 50px 0px;
}
.d-3-body ul {
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.d-3-body ul li {
  width: 270px;
  transition: background-color 2s;
  cursor: pointer;
}
.d-3-body ul {
  width: 1170px;
  margin: 0 auto;
}
.d-3-body ul li img {
  display: block;
  width: 100%;
  height: 180px;
}

.d-3-body ul li span {
  display: block;
  margin: 15px 15px;
  font-weight: 600;
}
.d-3-body ul li span:nth-of-type(2) {
  font-size: 12px;
  font-weight: 100;
  /* color: #9d9d9d; */
  text-align: right;
}
.d-3-body ul li p {
  height: 100px;
  line-height: 20px;
  display: block;
  font-size: 12px;
  color: #9d9d9d;
  margin: 0px 15px 15px 15px;
  text-indent: 2em;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
}

.d-4 {
  padding: 30px 0%;
  background-color: #444444;
  color: #c0c0c0;
  font-size: 40px;
  font-family: "Arial";
  font-weight: 900;
}
.d-4 span {
  display: block;
  font-size: 22px;
  margin-top: 5px;
}
.clear {
  clear: both;
}
</style>
