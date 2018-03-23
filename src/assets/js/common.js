import Vue from 'vue'

function urlEncode(String) {
    return encodeURIComponent(String)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22')
  }

Object.assign(window,{
urlEncode
})
export default Vue;
