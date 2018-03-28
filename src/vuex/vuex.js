import Vuex from 'vuex'
// import Vue from '../../static/common'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        setting:{
         // 在以下双引号中粘贴QQ钱包收款链接
        qqUrl: "https://vac.qq.com/wallet/qrcode.htm?m=tenpay&a=1&u=1023390323&ac=6A3A7AE30C7F13F7428EA594982DB6143AEA141B073F9DD922FE4C27634D2124&n=Yaphets&f=wallet",
        
        // 在以下双引号中粘贴微信收款链接
        wechatUrl: "wxp://f2f0J5oymdsVuje0-nTr0x-4wDrIn-zxZjTC",
        
        // 在以下双引号中粘贴支付宝收款链接
        aliUrl: "HTTPS://QR.ALIPAY.COM/FKX04559JWVFERLNRVNY4F",
        
        // 用于动态生成二维码的API，不需要修改。
        qrcodeApi: "http://qr.liantu.com/api.php?text="
        }
    }
})