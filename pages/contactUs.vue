<template>
  <div class="contactUs">
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
      <div class="contactUs-d2">
        <div class="subheading">
          <span>联系我们</span>
          <p>OUR PROFESSIONAL TEAM</p>
        </div>
        <ul>
          <li>
            <h1>滁州市富邦新型建材有限公司</h1>
            <p><img src="@/static/img/dianhuac.png" alt="" />0550-5291777</p>
            <p>
              <img src="@/static/img/youxiangc.png" alt="" />1045526336@qq.com
            </p>
            <p>
              <img src="@/static/img/dizhic.png" alt="" /><span
                >安徽省滁州市琅琊区西涧中小企业园</span
              >
            </p>
          </li>
          <li>
            <h1>滁州市富邦商品混凝土有限公司</h1>
            <p><img src="@/static/img/dianhuac.png" alt="" />0550-5201888</p>
            <p>
              <img src="@/static/img/youxiangc.png" alt="" />1045526336@qq.com
            </p>
            <p>
              <img src="@/static/img/dizhic.png" alt="" /><span
                >安徽省滁州市襄河镇花园村周庄组</span
              >
            </p>
          </li>
          <li>
            <h1>安徽富邦装配式建筑有限公司</h1>
            <p><img src="@/static/img/dianhuac.png" alt="" />0550-3837777</p>
            <p>
              <img src="@/static/img/youxiangc.png" alt="" />1045526336@qq.com
            </p>
            <p>
              <img src="@/static/img/dizhic.png" alt="" /><span
                >安徽省滁州市琅琊区菱溪河支以东、永 阳路以西、铜陵路以南</span
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contactUs-d3">
      <img src="@/static/img/1438.png" alt="" />
      <div class="content">
        <div class="contactUs-d3-body">
          <div class="body-1">
            <h1>发表您的留言</h1>
            <el-input
              class="ban ri"
              v-model="linkMan"
              placeholder="姓名"
            ></el-input>

            <el-input
              class="ban"
              v-model="email"
              placeholder="电子邮箱"
            ></el-input>

            <el-input
              class="ban"
              v-model="tel"
              placeholder="手机号码"
            ></el-input>

            <el-input
              style=" margin-bottom: 40px;"
              type="textarea"
              v-model="content"
              placeholder="我们能为您做些什么？"
            >
            </el-input>
            <el-input
              type="text"
              class="ban ri"
              placeholder="验证码"
              v-model="validateCode"
            /><el-button
              :type="primary"
              @click="getverifyCode"
              :disabled="disabledText"
              >{{ buttonText }}</el-button
            ><br />
            <el-button type="primary" @click="addComplaint">立即发送</el-button>
          </div>
          <div class="body-1">
            <h1>我们的分布图</h1>
            <!-- <el-amap
              vid="amapDemo"
              :zoom="zoom"
              :center="center"
              class="amap-demo"
            >
              <el-amap-marker
                vid="marker"
                v-for="marker in markers"
                :key="marker.mapName"
                :label="marker.label"
                :position="marker.position"
              ></el-amap-marker>
            </el-amap> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/contactUs")
    return {
      carouselList: data.carouselList
    }
  },
  data () {
    return {
      primary: 'primary',
      buttonText: '获取验证码',
      disabledText: false,
      validateCode: '',
      center: [118.340342, 32.261271],
      zoom: 10,
      markers: [{
        position: [118.332444, 32.391819],
        label: { content: '滁州市富邦新型建材有限公司', offset: [25, 10] }

      }, {
        position: [118.2635, 32.040279],
        label: { content: '滁州市富邦商品混凝土有限公司', offset: [25, 10] }

      }, {
        position: [118.352896, 32.358519],
        label: { content: '安徽富邦装配式建筑有限公司', offset: [25, 10] }

      }],
      headerImg: '',
      headerImgswitch: false,
      linkMan: '',
      tel: '',
      email: '',
      content: '',
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
    getverifyCode () {
      var that = this
      this.$axios.post("/getVerifyCode", { mobilePhone: that.tel }).then(res => {
        if (res.data.code == 200) {
          that.buttonText = '验证码发送成功'
          that.disabledText = true
          that.primary = 'success'
        } else {
          this.$notify.error({
            title: '错误',
            message: '验证码发送失败！请重试！'
          });
        }
      })
    },
    addComplaint () {
      var that = this
      if (that.linkMan == '' || that.tel == '' || that.email == '' || that.content == '') {
        this.$notify.error({
          title: '错误',
          message: '所有项为必填项，请确认填写每一项！'
        });
      }
      else {
        this.$axios.post("/addComplaint", { validateCode: that.validateCode, linkMan: that.linkMan, tel: that.tel, email: that.email, content: that.content }).then(res => {
          if (res.data.code == 200) {
            this.$notify({
              title: '成功',
              message: '发送成功！',
              type: 'success'
            });
            that.linkMan = ''
            that.tel = ''
            that.email = ''
            that.content = ''
            that.validateCode = ''
            that.disabledText = false
            that.primary = 'primary'
            that.buttonText = '获取验证码'
          } else {
            this.$notify.error({
              title: '错误',
              message: '发送失败！'
            });
          }
        })
      }

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

<style>
.amap-demo {
  width: 100%;
  height: 400px !important;
}

.body-1 {
  margin: 70px 0px 100px 0px;
  width: 48%;
}
.ban {
  width: 48%;
  margin-bottom: 40px;
}
.contactUs .el-textarea__inner {
  height: 80px;
}
.ri {
  margin-right: 2%;
}
.body-1 h1 {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 40px;
}
.contactUs-d3 {
  position: relative;
  overflow: hidden;
}
.contactUs-d3-body {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.contactUs-d3 > img {
  position: absolute;
  left: -1%;
  top: -1%;
  width: 105%;
  height: 105%;
  z-index: -1;
  filter: blur(5px);
}
.contactUs-d2 {
  padding: 80px 0px;
}
.contactUs-d2 ul {
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
.contactUs-d2 ul li {
  width: 350px;
  background: #f1f1f1;
  color: #6b6b6b;
  padding: 40px;
}
.contactUs-d2 ul li h1 {
  width: 50px;
  font-size: 20px;
  color: #3a82d4;
  padding-bottom: 20px;
  border-bottom: 3px solid #3a82d4;
  margin-bottom: 25px;
  white-space: nowrap;
}
.contactUs-d2 ul li p {
  margin-top: 10px;
  font-size: 14px;
}
.contactUs-d2 ul li p:nth-of-type(3) {
  display: flex;
  align-content: flex-start;
}
.contactUs-d2 ul li p span {
  width: 85%;
  display: inline-block;
}
.contactUs-d2 ul img {
  width: 14px;
  max-height: 16px;
  margin-right: 20px;
}
</style>
