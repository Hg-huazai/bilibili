// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: [],
    OtherList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   * 可以看到index.wxml传过来的id
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId= options.id;
    this.getCurrenVideoId(videoId);
    this.getOtherList(videoId);
  },

    /**
   * 根据视频id获取详情
   */
  getCurrenVideoId(videoId){
    let that=this
    wx.request({
      
      url:'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoDetail?id='+videoId,
      success(res){
        // console.log(res);
        if (res.statusCode===200){
          that.setData({
            videoInfo: res.data
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频
   */
  getOtherList(videoId){
    let that=this
    wx.request({
      url:'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/otherList?id=' + videoId,
      success(res){
        console.log(res);
        if(res.statusCode===200){
          that.setData({
            OtherList: res.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})