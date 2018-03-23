<template>
    <div class="code-item" id="code-qq">
      <div class="code-title"></div>
        <img id="page-url" :src="page_url">
      <div class="code-footer">长按以上二维码向我付款</div>
    </div>
</template>

<script>
export default {
  name: 'qq',
  data() {
    return {
      msg: 'qq面',
      page_url:'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
    }
  },
  methods:{
       init(){
         this.page_url=this.$store.state.setting.qrcodeApi + this.urlEncode(this.$store.state.setting.qqUrl)
       }
  },
  created(){
       this.init();
  }
}
</script>

<style scoped lang='less'>
      @import "~common/css/common.less";
    .code-title {
    height: 80px;
    background-size: 50%;
}
.code-item {
    background-color: #54b4ef;
}
</style>
