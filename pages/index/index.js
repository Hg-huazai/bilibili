Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击的首页导航的菜单的索引
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videsList:[]
    
  },
  //点击首页导航
  activeNav(e){
  //  console.log("ddd");
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  //获取首页导航数据
  getNavList(){
    let that=this
    //利用小程序内置的发送请求的方法
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
      success(res){
        // console.log(res);
        //判断是否请求成功code===0就是成功（看返回的数据）
        if(res.data.code===0){
          that.setData({
            //赋值给navList
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  //获取轮播图数据
  getswiperList(){
    let that=this
    //利用小程序内置的发送请求的方法
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper",
      success(res){
        // console.log(res);
        // 判断是否请求成功code===0就是成功（看返回的数据）
        if(res.data.code===0){
          that.setData({
            //赋值给swiperList
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  //获取视频列表数据
  getvidesList(){
    let that=this
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoList",
      success(res){
        // console.log(res);
        if(res.statusCode===200){
          that.setData({
            videsList:res.data
          })
        }
      }
      
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取首页导航数据
    this.getNavList();
    //2.获取轮播图数据
    this.getswiperList();
    //2.获取视频列表
    this.getvidesList();
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