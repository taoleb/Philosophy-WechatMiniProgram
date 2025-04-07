const app = getApp()

Page({
  data: {
    categories: [],
    showGuideTip: true
  },
  
  onLoad: function() {
    // 设置分类数据
    this.setData({
      categories: this.getCategories()
    })
    
    // 5秒后隐藏引导提示
    setTimeout(() => {
      this.setData({
        showGuideTip: false
      })
    }, 5000)
  },
  
  getCategories: function() {
    // 返回所有哲学分类
    return [
      { id: 2, title: '世界洞见', description: '透过哲学认识世界的本质', icon: '🌍', color: '#1e88e5' },
      { id: 3, title: '思想的力量', description: '探究思想如何改变世界', icon: '💪', color: '#43a047' },
      { id: 4, title: '哲学启智', description: '启迪智慧的哲学思考方式', icon: '💡', color: '#ff9800' },
      { id: 5, title: '思维模式', description: '认识不同的思维框架与模式', icon: '🔄', color: '#9c27b0' },
      { id: 6, title: '思维利器', description: '实用的思维工具与方法', icon: '🔧', color: '#607d8b' },
      { id: 7, title: '思懒致庸', description: '警惕思维懒惰与平庸化', icon: '😴', color: '#e53935' },
      { id: 8, title: '人性真相', description: '揭示人性背后的哲学真相', icon: '👤', color: '#795548' },
      { id: 9, title: '识人智慧', description: '从哲学视角理解人际关系', icon: '👥', color: '#009688' },
      { id: 10, title: '人生真谛', description: '探寻生命意义与人生价值', icon: '🌟', color: '#673ab7' },
      { id: 11, title: '文化融合', description: '东西方哲学思想的交融', icon: '🌏', color: '#f44336' },
      { id: 12, title: '生活哲学', description: '应用于生活的实践哲学', icon: '🏡', color: '#8bc34a' },
    ]
  },
  
  // 跳转到分类页面
  goToCategory: function(e) {
    const { id, title } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/category/category?id=${id}&title=${title}`
    })
  },

  onShareAppMessage: function() {
    return {
      title: '哲学智慧探索',
      path: '/pages/index/index'
    }
  }
})