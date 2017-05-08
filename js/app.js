function init(){
  axios.get('http://api.markof.cn/wechat/getShareConfig', {params: {url: window.location.href}})
  .then(function(res){
    var config = res.data
    config['debug'] = false
    config['jsApiList'] = ['onMenuShareTimeline','onMenuShareAppMessage']
    wx.config(config)
    wx.ready(function(){
      var shareParams = {
        title: '郭靖 & 梁雯曦 结婚啦！',
        desc: '5.28, 北京金都假日酒店, 诚邀您的参加。',
        link: 'http://jg.markof.cn/',
        imgUrl: 'http://jg.markof.cn/img/share.jpg'
      }
      wx.onMenuShareTimeline(shareParams)
      wx.onMenuShareAppMessage(shareParams)
    })
  })
}

var swiper = new Swiper('.swiper-container', {direction: 'vertical'})

init()

