<template>
    <div class="code-item" id="code-wechat">
      <div class="code-title"></div>
        <img id="page-url" :src="page_url">
      <div class="code-footer">长按以上二维码向我付款</div>
    </div>
</template>

<script>
export default {
  name: 'wechat',
  data() {
    return {
      msg: 'wechat',
      page_url:'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
    }
  },
  methods:{
       init(){
         this.page_url=this.$store.state.setting.qrcodeApi + urlEncode(this.$store.state.setting.wechatUrl)
       }
  },
  created(){
       this.init();
  },
    mounted(){
     document.title='收款码'
  },
}
</script>

<style scoped lang='less'>
      @import "~common/css/common.less";
    .code-title {
    height: 0.8rem;
    background-size: 50%;
}
.code-item {
    background-color: #54bc6e;
}
</style>
