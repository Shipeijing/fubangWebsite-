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
          @mouseenter="navdian = 0"
          @mouseleave="changenavdian"
          @click="(nav = 0), (details = null)"
          :class="navdian == 0 ? 'active1' : ''"
          >富邦资讯</span
        >
        <div :class="navdian == 0 ? 'dian leftdian' : 'dian rightdian'"></div>
        <span
          @mouseenter="navdian = 1"
          @mouseleave="changenavdian"
          @click="(nav = 1), (details = null)"
          :class="navdian == 1 ? 'active1' : ''"
          >富邦视频</span
        ><span
          ><img src="@/static/img/dingwei.png" alt="" />新闻资讯 -
          {{ nav == 0 ? "富邦资讯" : "富邦视频" }}</span
        >
      </div>
      <div class="ne-body" v-show="nav == 0 && details == null">
        <ul>
          <li
            v-for="(item, index) in newsList"
            @mouseenter="nebodylibg = index"
            @mouseleave="nebodylibg = null"
            @click="openNews(item.id)"
          >
            <img
              class="xinwenimg"
              v-if="index % 2 != 0"
              :src="$store.state.baseImgUrl + item.image"
              alt=""
            />
            <img
              v-if="index % 2 != 0"
              src="@/static/imgTemplate/xinwenbg.png"
              alt=""
            />

            <div :class="index % 2 == 0 ? 'ne-body-p right' : 'ne-body-p left'">
              <div class="time">
                <span>{{ item.year }}</span
                ><span
                  >{{ item.mm }}<br />
                  <p style="color:#4c4c4c;">{{ item.dd }}th</p></span
                >
              </div>
              <p>
                <strong>{{ item.title }}</strong>
              </p>
              <p>{{ item.remark }}</p>
            </div>
            <img
              class="xinwenimg xinwenimg-right"
              v-if="index % 2 == 0"
              :src="$store.state.baseImgUrl + item.image"
              alt=""
            />
            <img
              v-if="index % 2 == 0"
              src="@/static/imgTemplate/xinwenbg.png"
              alt=""
            />
            <!-- 这里是新闻鼠标移入动画 -->
            <!-- <div
            style=" position: absolute;opacity:0 ;"
            :class="nebodylibg == index ? 'ne-body-li-bg' : ''"
          >
            <span>查看新闻详情</span>
          </div> -->
          </li>
        </ul>
        <button v-if="NewspageReady == true" class="newsButton" @click="add(0)">
          <img src="@/static/img/9.png" alt="" />点击加载更多<img
            src="@/static/img/8.png"
            alt=""
          />
        </button>
        <button v-else class="newsButton">
          <img src="@/static/img/9.png" alt="" />已显示全部新闻<img
            src="@/static/img/8.png"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="content">
      <div class="ne-body-video" v-show="nav == 1 && details == null">
        <ul>
          <li v-for="item in videosList" @click="openVideo(item.id)">
            <img :src="$store.state.baseImgUrl + item.image" alt="" />
            <div>{{ item.title }}</div>
            <div>
              <img src="@/static/img/bofang.png" alt="" />{{
                item.hitCount
              }}次<span>{{ item.createDate }}</span>
            </div>
          </li>
          <div style="clear:both;"></div>
        </ul>
        <button
          v-if="VediospageReady == true"
          class="newsButton"
          @click="add(0)"
        >
          <img src="@/static/img/9.png" alt="" />点击加载更多<img
            src="@/static/img/8.png"
            alt=""
          />
        </button>
        <button v-else class="newsButton">
          <img src="@/static/img/9.png" alt="" />已显示全部视频<img
            src="@/static/img/8.png"
            alt=""
          />
        </button>
      </div>
      <div class="ne-body-readNew" v-show="details == 0">
        <div class="left">
          <div>
            <div class="ne-body-readNew-d1">
              <h1>{{ newsDetails.title }}</h1>
              <span>发布时间：{{ newsDetails.createDate }}</span
              ><span>发布者：{{ newsDetails.author }}</span
              ><span>浏览量：{{ newsDetails.hitCount }}</span
              ><span v-if="newsDetails.source != null"
                >来源：{{ newsDetails.source }}</span
              >
              <span v-else>来源：未知</span>
            </div>
          </div>
          <div v-html="newsDetails.content"></div>
        </div>
        <div class="right">
          <div>
            <h1>相关新闻</h1>
            <ul>
              <li
                v-for="(item, index) in relatedNews"
                @mouseenter="indexright = 't' + index"
                @mouseleave="indexright = null"
                @click="openNews(item.id)"
              >
                <img :src="$store.state.baseImgUrl + item.image" alt="" />
                <h5 :class="indexright == 't' + index ? 'activeright' : ''">
                  {{ item.title }}
                </h5>
                <div :class="indexright == 't' + index ? 'activeright' : ''">
                  {{ item.createDate
                  }}<img
                    v-if="indexright != 't' + index"
                    src="@/static/img/jiantou.png"
                    alt=""
                  />
                  <img v-else src="@/static/img/activejiantou.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h1>阅读排行榜</h1>
            <ul>
              <li
                v-for="(item, index) in rankingNews"
                @mouseenter="indexright = 'b' + index"
                @mouseleave="indexright = null"
                @click="openNews(item.id)"
              >
                <span :class="index < 3 ? 'spanre' : ''">{{ index + 1 }}</span>
                <p :class="indexright == 'b' + index ? 'activeright' : ''">
                  {{ item.title }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ne-body-readNew video" v-show="details == 1">
        <div>
          <div style="display:block;margin:0 auto;">
            <video
              :src="
                $store.state.baseImgUrl +
                  'video/' +
                  videoDetails.video.newFilename
              "
              controls="controls"
            ></video>
          </div>
          <div>{{ videoDetails.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/newsContent")
    return {
      carouselList: data.carouselList,
      newsList: data.newsList,
      videosList: data.videosList
    }
  },
  data () {
    return {
      indexright: null,
      navdian: 0,
      nebodylibg: null,
      nav: 0,
      details: null,
      headerImg: '',
      share: false,
      Newspage: 1,
      NewspageReady: true,
      Vediospage: 1,
      VediospageReady: true,
      headerImgswitch: false,
      newsDetails: {
        title: ''
      },
      videoDetails: { video: {} },
      relatedNews: [],
      rankingNews: []
    }
  },
  beforeMount () {
    if (sessionStorage.getItem('new-nav') != undefined) {
      this.nav = sessionStorage.getItem('new-nav')
    }
  },
  watch: {
    nav () {
      sessionStorage.setItem('new-nav', this.nav)
      if (this.nav == 0 || this.nav == 1) {
        this.videoDetails = { video: {} }
        this.newsDetails = {
          title: ''
        }
      }
      this.changenavdian()
      this.add(1)
    }
  },
  mounted () {
    if (this.$route.query.id != 'all' && this.$route.query.id != undefined) {
      this.openNews(this.$route.query.id)
    }
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
    add (i) {
      var that = this
      if (that.nav == 0) {
        if (i == 0) {
          that.Newspage += 1
        }

        if (that.Newspage == 1) {
          that.newsList = []
        }
        this.$axios.post("/getNewsList", { max: 5, page: that.Newspage }).then(res => {
          that.newsList.push(...res.data.rows)
          if (res.data.total == that.Newspage) {
            that.NewspageReady = false
          }
        })
      } else {
        if (i == 0) {
          that.Vediospage += 1        }
        if (that.Vediospage == 1) {
          that.videosList = []
        }
        this.$axios.post("/getVideoList", { max: 6, page: that.Vediospage }).then(res => {
          that.videosList.push(...res.data.rows)
          if (res.data.total == that.Vediospage) {
            that.VediospageReady = false
          }
        })
      }
    },
    changenavdian () {
      if (this.nav == 0) {
        this.navdian = 0
      } else {
        this.navdian = 1
      }
    },
    openNews (id) {
      this.$axios.post("/newsDetails", { id: id }).then(res => {
        this.newsDetails = res.data.news[0]
        this.details = 0
        this.relatedNews = res.data.relatedNews
        this.rankingNews = res.data.rankingNews
      })
    },
    openVideo (id) {
      this.$axios.post("/videoDetails", { id: id }).then(res => {
        this.videoDetails = res.data.video
        this.details = 1

      })
    },
    openheaderImg () {
      this.headerImg = 'openheaderImg'
    },
    clearheaderImg () {
      this.headerImg = 'clearheaderImg'
    },
  }
}
</script>
<style  lang="scss">
.ne-body-readNew {
  > .right {
    ul {
      margin-top: 20px;
      li {
        margin: 20px 0px;
        cursor: pointer;
        .activeright {
          color: #3a82d4;
        }
        > img {
          width: 100%;
          height: 100%;
        }
        p {
          width: 85%;
          float: right;
          text-align: left;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h5 {
          margin: 10px 0px;
          font-size: 16px;
          color: #272727;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          width: 18px;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
          color: #a8a8a8;
          border: 1px solid #a8a8a8;
          display: inline-block;
          margin-right: 10px;
        }
        .spanre {
          background: #3a82d4;
          color: #ffffff;
          border-color: #3a82d4;
        }
        div {
          font-size: 12px;
          color: #272727;
          img {
            width: 14px;
            float: right;
            margin-top: 3px;
          }
        }
      }
    }
  }
}
</style>

<style>
.newsButton {
  display: block;
  margin: 50px auto;
  border: 0;
  background: #fff;
  font-size: 14px;
  color: #9f9f9f;
  cursor: pointer;
}
.newsButton:hover {
  color: #6b6b6b;
}
.newsButton img {
  width: 40px !important;
  margin: 0px 20px;
}
.video div {
  flex-wrap: wrap !important;
}
.video div div video {
  width: 100%;
}
.video div div:nth-of-type(2) {
  margin: 20px 0px;
  text-align: center;
  width: 100%;
}
.ne-body-readNew-d1 h1 {
  color: #2a2a2a;
  font-size: 20px;
}
.ne-body-readNew > .left > div:nth-of-type(1) {
  border-bottom: 1px dashed #ececec;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.ne-body-readNew > .left > div:nth-of-type(2) {
  margin-top: 40px;
}
.ne-body-readNew-d1 span {
  color: #6b6b6b;
  padding: 10px 0px;
  display: inline-block;
  font-size: 12px;
  margin: 0 50px;
}
.ne-body-readNew-d2 > span {
  font-size: 14px;
  color: #3a82d4;
  border: 1.5px solid #3a82d4;
  border-radius: 15px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.ne-body-readNew-d1 {
  width: 100%;
  text-align: center;
  padding: 10px 0px;
}
.ne-body-readNew {
  width: 100%;
  margin: 20px auto;
  display: flex;
}
.ne-body-readNew > div:nth-of-type(1) {
  width: 75%;
}
.ne-body-readNew > .right {
  width: 20%;
  margin-left: 5%;
}
.ne-body-readNew > .right div {
  width: 100%;
  margin-bottom: 40px;
}
.ne-body-readNew > .right div h1 {
  border-left: 4px solid #3a82d4;
  padding-left: 15px;
  height: 24px;
  line-height: 20px;
  width: 100%;
  display: block;
  font-size: 22px;
}
.ne-body-video ul li > img {
  width: 100%;
  height: 100%;
}
.ne-body-video ul li div > img {
  width: 10px;
  margin-right: 5px;
}
.ne-body-video ul li div {
  margin: 5px 0px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 10px;
  color: #6b6b6b;
}
.ne-body-video ul li div span {
  float: right;
}
.ne-body-video ul li div:last-child {
  color: #6b6b6b;
  font-size: 12px;
}
.ne-body-video {
  width: 100%;
  margin: 40px auto;
}
.ne-body-video ul li {
  width: 30%;
  font-size: 14px;
  float: left;
  margin: 10px 1.5%;
  border: 1px solid #ececec;
  padding-bottom: 5px;
  cursor: pointer;
}
.left p {
  text-align: left;
}
.left .time {
  justify-content: flex-start;
}
.right p {
  text-align: right;
}
.right .time {
  justify-content: flex-end;
}
.ne-body-p > p {
  display: block;
  width: 100%;
  margin: 5px 0px;
}
.ne-body-p {
  width: 50%;
  padding: 50px 50px 50px 50px;
}
.ne-body {
  width: 100%;
}
.ne-body img {
  width: 50%;
  height: 100%;
}
.ne-body ul li {
  width: 100%;
  background: #f2f2f2;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  position: relative;
}
.ne-body-li-bg {
  width: 0%;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.3);
  color: #3a82d4;
  opacity: 1 !important;
  text-align: center;
  animation: nebodylibgopen 0.5s ease-out forwards;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ne-body-li-bg span {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #ececec;
  display: block;
  line-height: 150px;
  font-size: 18px;
  font-weight: 900;
  font-family: "jituan";
}
@keyframes nebodylibgopen {
  0% {
    width: 0%;
    left: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
}

.time {
  font-family: "xinwen";
  display: flex;
  margin: 10px 0px;
}
.time span:nth-of-type(1) {
  font-size: 30px;
  color: #a3bde2;
  font-style: italic;
}
.time span:nth-of-type(2) {
  color: #969595;
  display: inline-block;
  margin-left: 5px;
  font-style: italic;
}
</style>
