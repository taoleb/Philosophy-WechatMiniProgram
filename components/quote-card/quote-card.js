Component({
  /**
   * 组件的属性列表
   */
  properties: {
    quote: {
      type: String,
      value: ''
    },
    author: {
      type: String,
      value: ''
    },
    source: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isFavorite: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleFavorite() {
      this.setData({
        isFavorite: !this.data.isFavorite
      })
      
      this.triggerEvent('favorite', {
        isFavorite: this.data.isFavorite,
        quote: this.properties.quote,
        author: this.properties.author
      })
    },
    
    shareQuote() {
      this.triggerEvent('share', {
        quote: this.properties.quote,
        author: this.properties.author,
        source: this.properties.source
      })
    }
  }
})