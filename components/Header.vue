<template>
  <div class="headerTop">
    <div class="logo"><img src="@/static/img/logo.png" alt="" /></div>
    <div class="mulu" v-show="mulu == true" @click="changemuli">目录</div>
    <div ref="navbar" :class="navbar">
      <ul class="navbar-nav" @mouseleave="navbarnavspanout">
        <li class="nav-item" @mouseenter="navbarnavspan(0)">
          <nuxt-link ref="nav0" to="/">网站首页</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(1)">
          <nuxt-link ref="nav1" to="groupIntroduction">关于我们</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(2)">
          <nuxt-link ref="nav2" to="engineeringProject">工程项目</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(3)">
          <nuxt-link ref="nav3" to="equipmentDisplay">设备展示</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(4)">
          <nuxt-link ref="nav4" to="newsInformation">新闻资讯</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(5)">
          <nuxt-link ref="nav5" to="humanResources">人力资源</nuxt-link>
        </li>
        <li class="nav-item" @mouseenter="navbarnavspan(6)">
          <nuxt-link ref="nav6" to="contactUs">联系我们</nuxt-link>
        </li>
        <span ref="gundong"></span>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data () {
    return {
      mulu: false,
      navbar: 'navbar-collapseN',
      muli: false,
      url: '',
      gundong: [],
      ti1: null,
      ti2: null
    }
  },
  watch: {
    $route (to, from) {
      this.url = this.$route.name
      this.navbarnavspanout()
    }
  },
  mounted () {
    this.url = this.$route.name
    this.navbarnavspanout()
    var that = this

    window.onresize = () => {
      return (() => {
        var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        if (clientWidth > 925) {
          that.mulu = false
        } else {
          that.mulu = true
        }
        console.log(that.mulu)
      })()
    }
  },
  methods: {
    navbarnavspanout () {
      switch (this.url) {
        case 'index': this.navbarnavspan(0)

          break;
        case 'groupIntroduction': this.navbarnavspan(1)

          break;
        case 'engineeringProject': this.navbarnavspan(2)

          break;
        case 'equipmentDisplay': this.navbarnavspan(3)

          break;
        case 'newsInformation': this.navbarnavspan(4)

          break;
        case 'humanResources': this.navbarnavspan(5)
          break;
        case 'contactUs': this.navbarnavspan(6)
          break;

      }
    },
    navbarnavspan (i) {
      for (let j = 0; j < 7; j++) {
        if (j == i && this.$refs['nav' + i].$el.style.color == 'rgb(58, 130, 212)') {

        } else {
          this.$refs['nav' + j].$el.style.color = 'black'
        }


      }
      clearInterval(this.ti1)
      clearInterval(this.ti2)
      i = i * 112 + 7
      var ii = this.$refs.gundong.offsetLeft
      var that = this
      if (i - ii > 0) {
        that.ti1 = setInterval(function () {
          ii = that.$refs.gundong.offsetLeft
          if (ii == i) {
            clearInterval(that.ti1)
            that.$refs['nav' + ((i - 7) / 112)].$el.style.color = 'rgb(58, 130, 212)'

          } else {
            that.$refs.gundong.style.left = ii + 8 + 'px'
          }


        }, 1)
      } else {
        that.ti2 = setInterval(function () {
          ii = that.$refs.gundong.offsetLeft
          if (ii == i) {
            clearInterval(that.ti2)
            that.$refs['nav' + ((i - 7) / 104)].$el.style.color = 'rgb(58, 130, 212)'

          } else {
            that.$refs.gundong.style.left = ii - 8 + 'px'
          }


        }, 1)
      }
    },
    changemuli () {
      if (this.muli == false) {
        this.navbar = 'navbar-collapseN openmulu'
        this.muli = true
      } else {
        this.navbar = 'navbar-collapseN outmulu'
        this.muli = false
      }
    }
  }
}
</script>
<style>
.navbar-nav span {
  width: 95px;
  height: 79px;
  position: absolute;
  border-bottom: 4px solid #3a82d4;
  background: rgba(0, 0, 0, 0.05);
  top: 0px;
  left: 7px;
  z-index: -1;
}
.openmulu {
  animation: openmulu 1s ease-out forwards;
}
@keyframes openmulu {
  0% {
    height: 0px;
  }
  100% {
    height: 365px;
  }
}
.outmulu {
  animation: outmulu 1s ease-out forwards;
}
@keyframes outmulu {
  0% {
    height: 365px;
  }
  100% {
    height: 0px;
  }
}
.navbar-collapseN {
  overflow: hidden;
}
.headerTop {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
}
.logo {
  color: #3a82d4;
  line-height: 80px;
  float: left;
}
.logo img {
  width: 140px;
  margin-top: 22px;
  display: block;
}
.mulu {
  color: #3a82d4;
  line-height: 80px;
  float: right;
  cursor: pointer;
}
.navbar-collapseN ul {
  width: auto;
  height: inherit;
  position: relative;
}
.nav-item {
  float: left;
}
.nav-item a {
  text-decoration: none;
  line-height: 80px;
  display: inline-block;
  padding: 0px 20px;
  color: black;
}
.nav-item a:active {
  color: black;
}
.navbar-collapseN {
  height: 80px;
}
</style>
