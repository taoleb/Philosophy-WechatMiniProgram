// app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
      }
    })
  },
  
  globalData: {
    userInfo: null,
    // 哲学分类数据
    philosophyCategories: [
      { id: 1, title: '世界洞见', description: '透过哲学认识世界的本质', icon: '🌍', color: '#1e88e5' },
      { id: 2, title: '思想的力量', description: '探究思想如何改变世界', icon: '💪', color: '#43a047' },
      { id: 3, title: '哲学启智', description: '启迪智慧的哲学思考方式', icon: '💡', color: '#ff9800' },
      { id: 4, title: '思维模式', description: '认识不同的思维框架与模式', icon: '🔄', color: '#9c27b0' },
      { id: 5, title: '思维利器', description: '实用的思维工具与方法', icon: '🔧', color: '#607d8b' },
      { id: 6, title: '思懒致庸', description: '警惕思维懒惰与平庸化', icon: '😴', color: '#e53935' },
      { id: 7, title: '人性真相', description: '揭示人性背后的哲学真相', icon: '👤', color: '#795548' },
      { id: 8, title: '识人智慧', description: '从哲学视角理解人际关系', icon: '👥', color: '#009688' },
      { id: 9, title: '人生真谛', description: '探寻生命意义与人生价值', icon: '🌟', color: '#673ab7' },
      { id: 10, title: '文化融合', description: '东西方哲学思想的交融', icon: '🌏', color: '#f44336' },
      { id: 11, title: '生活哲学', description: '应用于生活的实践哲学', icon: '🏡', color: '#8bc34a' },
      { id: 12, title: '精英引领', description: '伟大思想家的思想精髓', icon: '👑', color: '#ffc107' },
      { id: 13, title: '终极探究', description: '关于存在与宇宙的终极问题', icon: '🔭', color: '#3f51b5' }
    ]
  }
})