const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 将字符串截取到指定长度，超出部分显示省略号
 * @param {string} str 需要截取的字符串
 * @param {number} len 截取长度
 */
const ellipsis = (str, len = 20) => {
  if (!str) return ''
  if (str.length <= len) return str
  return str.substring(0, len) + '...'
}

/**
 * 简单数据缓存
 * @param {string} key 键名
 * @param {any} data 数据
 * @param {number} expireTime 过期时间，单位分钟，默认30分钟
 */
const setCache = (key, data, expireTime = 30) => {
  const timestamp = Date.now()
  const expiration = timestamp + expireTime * 60 * 1000
  wx.setStorageSync(key, {
    data,
    expiration
  })
}

/**
 * 获取缓存数据
 * @param {string} key 键名
 * @returns {any} 缓存的数据，如果已过期则返回null
 */
const getCache = key => {
  const cache = wx.getStorageSync(key)
  if (!cache) return null
  const { data, expiration } = cache
  if (Date.now() > expiration) {
    wx.removeStorageSync(key)
    return null
  }
  return data
}

/**
 * 轻提示封装
 * @param {string} title 提示内容
 * @param {string} icon 图标类型
 */
const toast = (title, icon = 'none') => {
  wx.showToast({
    title,
    icon,
    duration: 2000
  })
}

module.exports = {
  formatTime,
  formatNumber,
  ellipsis,
  setCache,
  getCache,
  toast
}