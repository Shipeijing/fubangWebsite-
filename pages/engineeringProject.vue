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
    <div class="content">
      <div class="en">
        <div class="subheading">
          <span>工程项目</span>
          <p>OUR PROFESSIONAL TEAM</p>
        </div>
        <div class="en-body1">
          <div>
            <h4>{{ fbProjectList[bodyimg1].title }}</h4>
            <p v-html="fbProjectList[bodyimg1].content"></p>
          </div>
          <div>
            <ul>
              <li
                v-for="(item, index) in fbProjectList"
                @mouseenter="bodyimg1 = index"
              >
                <img
                  v-if="index == 0 || index == 3"
                  src="@/static/imgTemplate/shebei1.png"
                  alt=""
                />
                <img
                  v-if="index == 1 || index == 2"
                  src="@/static/imgTemplate/shebei2.png"
                  alt=""
                />
                <img
                  class="en-body1-img"
                  :src="$store.state.baseImgUrl + item.image"
                  alt=""
                />
                <div :class="bodyimg1 == index ? 'bgclear' : ''">
                  <span>{{ item.title }}</span
                  ><span></span>
                </div>
              </li>
              <div style="clear:both;"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="en-body2">
      <div class="content">
        <ul>
          <li v-for="(item, index) in fbProjectListNot">
            <img :src="$store.state.baseImgUrl + item.image" alt="" />
            <div>
              <img src="@/static/img/dizhi1.png" alt="" />{{ item.title }}
            </div>
          </li>
          <div style="clear:both;"></div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/fbProjectList")
    return {
      carouselList: data.carouselList,
      fbProjectList: data.fbProjectList,
      fbProjectListNot: data.fbProjectListNot
    }
  },
  data () {
    return {
      bodyimg1: 0,
      headerImg: '',
      headerImgswitch: false
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
.en-body2 {
  width: 100%;
  margin-top: 50px;
  background: #f5f5f5;
  padding: 50px;
}
.en-body2 ul li {
  width: 20%;
  float: left;
  font-size: 14px;
  color: #ffffff;
  margin-top: 20px;
  transition: background-color 1s;
  margin-right: 6.66%;
  cursor: pointer;
}
.en-body2 ul li:nth-of-type(4) {
  margin-right: 0% !important;
}
.en-body2 ul li:nth-of-type(8) {
  margin-right: 0% !important;
}
.en-body2 ul li:hover {
  background-color: #3a82d4;
}
.en-body2 ul li > img {
  width: 100%;
  height: 170px;
}
.en-body2 ul li div > img {
  width: 10px;
  margin-right: 10px;
}
.en-body2 ul li div {
  text-align: center;
  padding: 12px;
}
.bgclear {
  animation: bgclear 1s forwards;
}
@keyframes bgclear {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
.en-body1 {
  display: flex;
  flex-wrap: nowrap;
}
.en-body1 h4 {
  color: #3a82d4;
  padding: 20px 0px;
  font-size: 20px;
}
.en-body1 p {
  text-indent: 2em;
}
.en-body1 > div {
  width: 50%;
}
.en-body1 > div:nth-of-type(1) {
  padding-right: 40px;
}
.en-body1 > div ul li {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  float: left;
}
.en-body1-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.en-body1 > div ul li:nth-of-type(1) {
  width: 55%;
}
.en-body1 > div ul li:nth-of-type(4) {
  width: 55%;
}
.en-body1 > div ul li:nth-of-type(2) {
  width: 45%;
}
.en-body1 > div ul li:nth-of-type(3) {
  width: 45%;
}
.en-body1 > div ul li img {
  width: 100%;
}
.en-body1 > div ul li div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
}
.en-body1 > div ul li div span {
  display: block;
  color: #ffffff;
  text-align: center;
}
.en-body1 > div ul li div span:nth-of-type(1) {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 5px;
}
.en-body1 > div ul li div span:nth-of-type(2) {
  background: #ffffff;
  width: 40px;
  height: 3px;
  border-radius: 2px;
  margin: 10px auto;
}
.en {
  width: 100%;
  margin: 50px auto;
}
</style>
