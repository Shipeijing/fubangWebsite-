<template>
  <div class="footer">
    <div class="content">
      <ul>
        <li>
          <h5>联系我们</h5>
          <ul>
            <li>
              <img
                src="@/static/img/weizhi.png"
                alt=""
              />安徽省滁州市琅琊区西涧中小企业园
            </li>
            <li><img src="@/static/img/dianhua.png" alt="" />0550-5291777</li>
            <li>
              <img src="@/static/img/xinxi.png" alt="" />1045526336@qq.com
            </li>
            <li><img src="@/static/img/chuanzhen.png" alt="" />0550-3530018</li>
          </ul>
        </li>
        <li>
          <h5>集团官网</h5>
          <ul>
            <li @click="footer(1)">关于我们</li>
            <li @click="footer(2)">工程项目</li>
            <li @click="footer(3)">设备展示</li>
            <li @click="footer(4)">新闻资讯</li>
            <li @click="footer(5)">人力资源</li>
            <li @click="footer(6)">联系我们</li>
          </ul>
        </li>
        <li>
          <h5>旗下公司</h5>
          <ul>
            <li @click="zuzhi">富邦新型建材公司</li>
            <li @click="zuzhi">富邦混凝土公司</li>
            <li @click="zuzhi">富邦装配式建筑有限公司</li>
          </ul>
        </li>
        <li>
          <h5>微信二维码</h5>
          <img
            style="margin-top:20px;width:100px;"
            src="@/static/img/erweima.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  methods: {
    footer (i) {
      switch (i) {
        case 1: this.$router.push({ path: '/groupIntroduction' })
          break
        case 2: this.$router.push({ path: '/engineeringProject' })
          break
        case 3: this.$router.push({ path: '/equipmentDisplay' })
          break
        case 4: this.$router.push({ path: '/newsInformation' })
          break
        case 5: this.$router.push({ path: '/humanResources' })
          break
        case 6: this.$router.push({ path: '/contactUs' })
          break
      }
    }
  },
  zuzhi () {
    this.$router.push({ path: '/groupIntroduction' })
  }
}
</script>
<style lang="scss">
.footer {
  width: 100%;
  background: #343338;
  padding: 50px 0px;
  div {
    > ul {
      width: 100%;
      margin: 0px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > li {
        width: 23%;
        h5 {
          width: 20px;
          color: #d3d3d3;
          border-bottom: 2px solid #d3d3d3;
          padding-bottom: 10px;
          white-space: nowrap;
        }
        > ul {
          margin-top: 10px;
          > li {
            padding: 5px 0px;
            font-size: 12px;
            color: #979799;
            cursor: pointer;
            img {
              width: 12px;
              height: 12px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
