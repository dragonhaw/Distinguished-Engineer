const app = getApp();
const movieApi = app.globalData.url;

Page({
  data: {
    movie: [],
  },

  onLoad: function () {
    wx.request({
      url: movieApi,
      success: (res) => {
        let list = res.data;
        if (Array.isArray(list) && list.length > 0) {
          this.setData({
            movie: list
          });
        }
      }
    })
  }
})
