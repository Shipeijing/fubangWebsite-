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
          @click="(nav = 0), (tableState = 0)"
          :class="navdian == 0 ? 'active1' : ''"
          >社会招聘</span
        >
        <div :class="navdian == 0 ? 'dian leftdian' : 'dian rightdian'"></div>
        <span
          @mouseenter="navdian = 1"
          @mouseleave="changenavdian"
          @click="(nav = 1), (tableState = 0)"
          :class="navdian == 1 ? 'active1' : ''"
          >学校招聘</span
        ><span
          ><img src="@/static/img/dingwei.png" alt="" />人力资源 -
          {{ nav == 0 ? "社会招聘" : "学校招聘" }}</span
        >
      </div>
    </div>
    <div class="content">
      <div class="hu-body" v-show="tableState == 0">
        <div class="hu-body-search">
          <el-input
            placeholder="输入您想搜索的职位关键字"
            v-model="searchText"
            @input="vagueSearch"
          ></el-input>
        </div>
        <div style="clear:both;"></div>
        <div>
          <el-table :data="tableDataSearch" class="hu-body-table">
            <el-table-column prop="positionName" label="职位名称">
            </el-table-column>
            <el-table-column prop="positionType" label="职位类别">
            </el-table-column>
            <el-table-column prop="workLocation" label="工作地点">
            </el-table-column>
            <el-table-column prop="createDate" label="发布时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click="tableStatechange(scope.row.id)"
                  size="small"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-show="tableState == 1" class="table-b2">
        <div class="table-h">
          <span
            >岗位名称：
            <p style="color: #3a82d4;">
              {{ tableStateData.positionName }}
            </p></span
          >
          <span
            >学历：
            <p style="color: #3a82d4;">{{ tableStateData.education }}</p></span
          >
          <span
            >工作年限：
            <p style="color: #3a82d4;">{{ tableStateData.worklife }}</p></span
          >
          <span
            >工作类型：
            <p style="color: #3a82d4;">
              {{ tableStateData.positionType }}
            </p></span
          >
        </div>
        <table class="xiangqing">
          <tr>
            <td style="font-weight: 600;">任职资格</td>
          </tr>
          <tr>
            <td v-html="tableStateData.postQuali"></td>
          </tr>
          <tr>
            <td style="font-weight: 600;">岗位要求</td>
          </tr>
          <tr>
            <td v-html="tableStateData.jobRequire"></td>
          </tr>
          <tr>
            <td style="font-weight: 600;">你会得到什么</td>
          </tr>
          <tr>
            <td v-html="tableStateData.getWhat"></td>
          </tr>
          <tr>
            <td style="font-weight: 600;">应聘方式</td>
          </tr>
          <tr>
            <td v-html="tableStateData.appliyMethod"></td>
          </tr>
        </table>

        <button
          class="resumebutton"
          @click="
            tableState = 2;
            resume.recruitId = tableStateData.id;
          "
        >
          我要投简历
        </button>
        <div style="clear:both;"></div>
      </div>
      <div v-show="tableState == 2" class="resume">
        <div class="resume1">
          <span>姓名：</span><input type="text" v-model="resume.name" />
        </div>
        <div>
          <span>年龄：</span
          ><el-select v-model="resume.age">
            <el-option
              v-for="item in 100"
              :key="item + ' 岁'"
              :label="item + ' 岁'"
              :value="item + ' 岁'"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>性别：</span
          ><el-radio v-model="resume.sex" label="男">男</el-radio>
          <el-radio v-model="resume.sex" label="女">女</el-radio>
        </div>
        <div class="resume3">
          <span>籍贯：</span
          ><v-distpicker
            @province="province"
            @city="city"
            @area="area"
          ></v-distpicker>
        </div>
        <div class="resume4">
          <span>详细地址：</span><input type="text" v-model="resume.address" />
        </div>
        <div>
          <span>是否婚配：</span
          ><el-radio v-model="resume.marry" label="是">是</el-radio>
          <el-radio v-model="resume.marry" label="否">否</el-radio>
        </div>
        <div class="resume6">
          <span>学历：</span><input type="text" v-model="resume.education" />
        </div>

        <div>
          <span>教育经历：</span
          ><textarea
            name=""
            id=""
            v-model="resume.education1"
            cols="50"
            rows="5"
          ></textarea>
        </div>
        <div>
          <span>工作经历：</span
          ><textarea
            name=""
            id=""
            v-model="resume.work"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div class="resume7">
          <span>手机号码：</span><input type="text" v-model="resume.tell" />
        </div>
        <div>
          <span>验证码：</span
          ><input type="text" v-model="resume.validateCode" /><el-button
            :type="primary"
            @click="getverifyCode"
            :disabled="disabledText"
            >{{ buttonText }}</el-button
          >
        </div>
        <button class="resumebutton" @click="subresume">提 交</button>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/recruitment")
    return {
      carouselList: data.carouselList,
      hrSocietyList: data.hrSocietyList,
      hrCampusList: data.hrCampusList
    }
  },
  data () {
    return {
      navdian: 0,
      sex: '1',
      searchText: '',
      tableState: 0,
      primary: 'primary',
      buttonText: '获取验证码',
      disabledText: false,
      headerImg: '',
      headerImgswitch: false,
      nav: 0,
      tableData: [],
      tableDataSearch: [],
      tableStateData: [],
      jiguan: {
        province: '', city: '', area: '',
      },
      resume: {
        age: ' ',
        name: '',
        tell: '',
        jiguan: '',
        sex: '',
        marry: '',
        education: '',
        work: '',
        recruitId: '',
        address: '',
        education1: '',
        validateCode: '',
      }
    }
  },
  beforeMount () {
    if (sessionStorage.getItem('hum-nav') != undefined) {
      this.nav = sessionStorage.getItem('hum-nav')
    }
  },
  watch: {
    nav () {
      sessionStorage.setItem('hum-nav', this.nav)
      if (this.nav == 0) {
        this.tableData = this.hrSocietyList
        this.tableDataSearch = this.tableData
      } else {
        this.tableData = this.hrCampusList
        this.tableDataSearch = this.tableData
      }
    }
  },
  mounted () {
    this.tableData = this.hrSocietyList
    this.tableDataSearch = this.tableData
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
    changenavdian () {
      if (this.nav == 0) {
        this.navdian = 0
      } else {
        this.navdian = 1
      }
    },
    vagueSearch (a) {
      this.tableDataSearch = []
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].positionName.search(this.searchText) != -1) {
          this.tableDataSearch.push(this.tableData[i])
        }
      }
    },
    province (a) {
      this.jiguan.province = a.value
    },
    city (a) {
      this.jiguan.city = a.value
    },
    area (a) {
      this.jiguan.area = a.value
    },
    subresume () {
      this.resume.jiguan = this.jiguan.province + this.jiguan.city + this.jiguan.area
      var that = this
      this.$axios.post("/saveResume", { params: that.resume }).then(res => {
        if (res.data.code == 200) {
          that.resume = {
            age: ' ',
            name: '',
            tell: '',
            jiguan: '',
            sex: '',
            marry: '',
            education: '',
            work: '',
            recruitId: '',
            address: '',
            education1: '',
            validateCode: '',
          }
          that.tableState = 0
          this.$notify({
            title: '成功',
            message: res.data.msg,
            type: 'success'
          });
        } else {
          this.$notify.error({
            title: '错误',
            message: res.data.msg
          });
        }
      })
    },
    getverifyCode () {
      var that = this
      this.$axios.post("/getVerifyCode", { mobilePhone: that.resume.tell }).then(res => {
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
    tableStatechange (id) {
      var that = this
      this.$axios.post("/hrDetails", { id: id }).then(res => {
        that.tableStateData = res.data.recruit
        that.tableState = 1
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
<style>
.resume .el-input__suffix {
  opacity: 0;
}
.resume .el-input {
  width: 150px !important;
}
.resume3 input {
  width: 25%;
}
.resume1 input {
  width: 30%;
}
.resume6 input {
  width: 40%;
}
.resume7 input {
  width: 250px;
}
.resume4 input {
  width: 70%;
}
.resume5 input {
  width: 20%;
}
.resume div input {
  border-radius: 5px;
  background: #f6f6f6;
  border: 0px;
  padding: 10px;
  margin-right: 20px;
  color: #6b6b6b;
}
.resume div textarea {
  border-radius: 5px;
  background: #f6f6f6;
  border: 0px;
  padding: 10px;
  margin-right: 50px;
  width: 70%;
  color: #6b6b6b;
}
.resume div > span {
  width: 80px;
  display: inline-block;
  color: #6b6b6b;
}
.resume > div {
  margin: 30px 0px;
  display: flex;
  align-items: center;
}
.resume {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px;
}
.resumebutton {
  padding: 8px 50px;
  background: #3a82d4;
  color: #ffffff;
  border: 0px;
  float: right;
  margin-right: 40px;
  display: block;
  cursor: pointer;
  margin-top: 20px;
}
.table-b2 {
  width: 100%;
  margin: 20px auto;
}
.table-h {
  display: flex;
  flex-wrap: nowrap;
}
.table-h span {
  width: 250px;
  display: flex;
  flex-wrap: nowrap;
}
.xiangqing td {
  padding-top: 10px;
  font-size: 14px;
}
.has-gutter tr {
  background: #eaeaea;
}
.hu-body-table {
  width: 100%;
  margin-top: 20px;
}
.hu-body-search .el-input {
  width: 100%;
}
.hu-body-search .el-input .el-input__inner {
  border-color: #ffffff;
  background: #f6f6f6;
}
.hu-body-search {
  width: 375px;
  float: right;
}
.hu-body {
  margin: 50px auto;
  width: 100%;
}
</style>
