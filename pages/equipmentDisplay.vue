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
      <div class="eq">
        <div class="subheading">
          <span>工程设备</span>
          <p>OUR PROFESSIONAL TEAM</p>
        </div>
        <div class="eq-body">
          <ul>
            <li
              v-for="(item, index) in fbEquipment"
              @mouseenter="eqbody = index"
              @mouseleave="eqbody = null"
              :class="index % 2 == 0 ? 'marginright6' : ''"
            >
              <img :src="$store.state.baseImgUrl + item.image" alt="" />
              <div>
                <span :class="eqbody == index ? 'colorLan' : ''">{{
                  item.title
                }}</span>
                <p>{{ item.remark }}</p>
              </div>
            </li>
            <div style="clear:both;"></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get("/equipmentExhibition")
    return {
      carouselList: data.carouselList,
      fbEquipment: data.fbEquipment
    }
  },
  data () {
    return {
      headerImg: '',
      eqbody: null,
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
.colorLan {
  color: #3a82d4;
}
.eq-body ul li {
  width: 47%;
  display: flex;
  flex-wrap: nowrap;
  letter-spacing: 1px;
  float: left;
  margin-bottom: 50px;
}
.eq-body ul li:hover {
  box-shadow: 0px 0px 15px #9b9b9b;
}
.marginright6 {
  margin-right: 6%;
}
.eq-body ul li img {
  width: 50%;
  height: 100%;
}
.eq-body ul li span {
  display: inline-block;
  font-size: 14px;
  padding: 12px 0px;
}
.eq-body ul li div {
  width: 50%;
  padding-left: 10px;
  padding-top: 10px;
}
.eq-body ul li div span:nth-of-type(2) {
  color: #9d9d9d;
}
.eq-body ul li p {
  font-size: 12px;
  color: #9b9b9b;
}
.eq {
  width: 100%;
  margin: 50px auto;
}
</style>
