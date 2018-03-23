<template>
  <div class="code-item" id="code-all">
    <div class="code-title"></div>
    <img id="page-url" :src="page_url">
    <div class="code-footer">扫描以上二维码向我付款</div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: '主页面',
      userAgent: navigator.userAgent,
      page_url:
        'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
    }
  },
  methods: {
    isNavigator() {
      if (navigator.userAgent.match(/Alipay/i)) {
        window.location.href = this.$store.state.setting.aliUrl
      } else if (navigator.userAgent.match(/MicroMessenger\//i)) {
        this.$router.push({ path: '/wechat' })
      } else if (navigator.userAgent.match(/QQ\//i)) {
        this.$router.push({ path: '/qq' })
      } else {
        this.page_url =
          this.$store.state.setting.qrcodeApi +
          urlEncode(window.location.href)
      }
    }
  },
  created() {
    this.isNavigator()
  },
  mounted(){
     document.title='收款码'
  },
  watch: {
    userAgent(val, oldval) {
      this.isNavigator()
    }
  }
}
</script>

<style scoped lang='less'>
@import '~common/css/common.less';
.code-title {
  height: 1rem;
  background-size: 70%;
}
.code-item {
  background-color: #5c92ef;
}
</style>
