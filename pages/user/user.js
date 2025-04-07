// pages/user/user.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    favorites: [
      { id: 1, title: '苏格拉底的辩证法', date: '2023-04-15' },
      { id: 2, title: '柏拉图的理念论', date: '2023-04-13' },
      { id: 3, title: '亚里士多德的形而上学', date: '2023-04-10' }
    ],
    readingHistory: [
      { id: 1, title: '哲学导论', date: '2023-04-16', progress: 65 },
      { id: 2, title: '西方哲学史', date: '2023-04-12', progress: 30 },
      { id: 3, title: '东方哲学概览', date: '2023-04-08', progress: 90 }
    ]
  },
  
  onLoad: function () {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  getUserProfile: function() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  
  goToFavoriteDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },
  
  continueReading: function(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },
  
  onShareAppMessage: function() {
    return {
      title: '哲学思想家 - 我的空间',
      path: '/pages/user/user'
    }
  }
})